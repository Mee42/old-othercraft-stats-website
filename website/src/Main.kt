import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLTableElement
import kotlin.browser.document
import kotlin.dom.addClass
import kotlin.dom.appendText
import kotlin.js.Date

external fun getUsernames(callback: (String) -> Unit)
external fun getEntries(callback: (String) -> Unit)
external fun getOld(callback: (String) -> Unit)


data class LogEntry(
        val username: String,
        val time: Long,
        val msDuration: Int)


fun map(usernamesJ: String, entriesJ: String,oldJ: String): List<LogEntry> {

    val usernames = JSON.parse<dynamic>(usernamesJ)
    fun getUsernameForUUID(uuid: String): String {
        for (q in usernames) {
            if (q.uuid == uuid) {
                return q.name.unsafeCast<String>()
            }
        }
        return uuid
    }

    val entries = JSON.parse<dynamic>(entriesJ)
    val old = JSON.parse<dynamic>(oldJ)
    val list = mutableListOf<LogEntry>()

    val addDynamicToList = { entry: dynamic ->
        val timeLogged = entry.timeLogged.unsafeCast<Long>()
        val millis = entry.millis.unsafeCast<Int>()
        val uuid = entry.uuid.unsafeCast<String>()
        list += LogEntry(
                username = getUsernameForUUID(uuid),
                time = timeLogged,
                msDuration = millis)
    }

    for (entry in entries)
        addDynamicToList(entry)
    for (entry in old)
        addDynamicToList(entry)

    return list
}

fun getList(callback: (List<LogEntry>) -> Unit) {
    var usernames: String? = null
    var entries: String? = null
    var old: String? = null

    fun test() {
        if (usernames != null && entries != null && old != null) {
            callback(map(usernames!!, entries!!,old!!))
        }
    }
    getEntries {
        entries = it
        test()
    }
    getUsernames {
        usernames = it
        test()
    }
    getOld {
        old = it
        test()
    }
}




fun main() {

    val showHide = document.getElementById("table-toggle")!! as HTMLButtonElement

    val table = document.getElementById("entire-table") as HTMLTableElement


    showHide.onclick = {
        if (table.style.display === "none") {
            table.style.display = ""
            showHide.innerText = " hide table"
        } else {
            table.style.display = "none"
            showHide.innerText = "show table"
        }
    }

    getList {
        charts(it)
        document.getElementById("totalHours")!!.textContent = it
                .map { e -> e.msDuration }
                .fold(0.0){ a,b -> a + b }
                .div(1000 * 60 * 60)
                .toInt()
                .toString()
                .concat(" Hours total")

        run {
            val header = table.insertRow()
            header.insertCell().appendText("Username").addClass("header")
            header.insertCell().appendText("Duration").addClass("header")
            header.insertCell().appendText("Time logged off").addClass("header")
            for (log in it) {
                val tr = table.insertRow()
                tr.insertCell().appendText(log.username)
                val d = log.msDuration
                d.toString()
                tr.insertCell().appendText(Duration(d / 1000).toString())
                tr.insertCell().appendText(Date(milliseconds = log.time).toDateString())
            }
        }//table
    }
}

