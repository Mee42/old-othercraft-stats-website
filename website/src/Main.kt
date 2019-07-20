import org.w3c.dom.HTMLTableElement
import kotlin.browser.document
import kotlin.dom.addClass
import kotlin.dom.appendText

external fun getUsernames(callback :(String) -> Unit)
external fun getEntries(callback :(String) -> Unit)

data class LogEntry(
        val username :String,
        val time: Long,
        val msDuration: Long)


fun map(usernamesJ: String,entriesJ: String):List<LogEntry>{
    println("usernamesJ:$usernamesJ")
    println("entriesJ:$entriesJ AOEU")

    val usernames = JSON.parse<dynamic>(usernamesJ)
    fun getUsernameForUUID(uuid: String):String{
        for (q in usernames){
            if (q.uuid == uuid){
                return q.name.unsafeCast<String>()
            }
        }
        return uuid
    }

    val entries = JSON.parse<dynamic>(entriesJ)

    val list = mutableListOf<LogEntry>()

    for (entry in entries){
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

fun getList(callback: (List<LogEntry>) -> Unit){
    var usernames: String? = null
    var entries: String? = null

    fun test(){
        if (usernames != null && entries != null){
            callback(map(usernames!!,entries!!))
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
    println("hmmm")
    getList {
        val table = document.getElementById("table") as HTMLTableElement

        val header = table.insertRow()
        header.insertCell().appendText("Username").addClass("header")
        header.insertCell().appendText("Duration").addClass("header")
        header.insertCell().appendText("Time logged off").addClass("header")


        for (log in it){
            val tr = table.insertRow()
            tr.insertCell().appendText(log.username)
            tr.insertCell().appendText(log.msDuration.toString())
            tr.insertCell().appendText(log.time.toString())
        }
    }
}