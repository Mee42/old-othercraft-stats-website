import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLTableElement
import kotlin.browser.document
import kotlin.dom.addClass
import kotlin.dom.appendText
import kotlin.js.Date

external fun getUsernames(callback: (String) -> Unit)
external fun getEntries(callback: (String) -> Unit)

data class LogEntry(
        val username: String,
        val time: Long,
        val msDuration: Long)


fun map(usernamesJ: String, entriesJ: String): List<LogEntry> {

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

    val list = mutableListOf<LogEntry>()

    for (entry in entries) {
        val timeLogged = entry.timeLogged.unsafeCast<Long>()
        val millis = entry.millis.unsafeCast<Long>()
        val uuid = entry.uuid.unsafeCast<String>()
        list += LogEntry(
                username = getUsernameForUUID(uuid),
                time = timeLogged,
                msDuration = millis)
    }
    return list
}

fun getList(callback: (List<LogEntry>) -> Unit) {
    var usernames: String? = null
    var entries: String? = null

    fun test() {
        if (usernames != null && entries != null) {
            callback(map(usernames!!, entries!!))
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
}




fun main() {
    println("u shouldn't be here.\ngood for you.")

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
                tr.insertCell().appendText(Duration(js("d / 1000").toString().toDouble().toLong()).toString())
                tr.insertCell().appendText(Date(milliseconds = log.time).toDateString())
            }
        }//table
    }
}

