package org.othercraft

import com.google.gson.GsonBuilder
import java.io.File
import java.time.Duration
import java.time.Instant
import java.time.format.DateTimeFormatter

val logs = File("logs/")

val logInRegex = Regex("""^UUID of player ([a-zA-Z0-9_-]{3,16}) is ([a-f0-9-]{36})${'$'}""")
val logOutRegex = Regex("""^([a-zA-Z0-9_-]{3,16}) left the game${'$'}""")

val old = File("res/old.json")

private data class Pair(val username: String, val uuid: String, val start :Instant)

fun main() {


    val l = mutableListOf<Entry>()

    for (file in logs.listFiles() ?: error("not a dir")) {
        try {
            val name = file.name
            if (name.contains(".log.gz")) {
                println("skipping compressed $name")
                continue
            }
            if (file.isDirectory){
                continue
            }
            val year = name.substring(0, 4)
            val month = name.substring(5, 7)
            val day = name.substring(8, 10)


            //[01:08:21] [User Authenticator #47/INFO]: UUID of player AwesomeCarson123 is acf64dfa-f5f3-4e7d-b6fe-ca045d6393a3
            //0123456789

            val currentUsers = mutableListOf<Pair>()

            for (line in file.readLines()) {
                if (!line.startsWith("[")){
                    continue
                }
                try {
//                    println(line)
                    val time = line.substring(1, 10)
                    val hour = time.substring(0, 2)
                    val min = time.substring(3, 5)
                    val sec = time.substring(6, 8)
                    val instant = DateTimeFormatter.ISO_INSTANT.parse("$year-$month-${day}T$hour:$min:$sec.0Z", Instant::from)
                    val logEntry = line.substring(10)
                    val withoutThread = logEntry.substring(logEntry.indexOf(']') + 3)

                    //is it a login?
                    var matcher = logInRegex.toPattern().matcher(withoutThread)
                    if (matcher.matches()) {
                        val username = matcher.group(1)
                        val uuid = matcher.group(2)
                        println("$instant $username logged in")
                        currentUsers += Pair(username = username, uuid = uuid,start = instant)
                    }

                    matcher = logOutRegex.toPattern().matcher(withoutThread)
                    if (matcher.matches()) {
                        val username = matcher.group(1)
                        val (_,uuid,start) = currentUsers.lastOrNull { it.username == username } ?: continue
                        println("$instant $username logged out. Duration: ${formatDuration(Duration.between(start,instant))}")
                        l += Entry(
                                timeLogged = instant.toEpochMilli(),
                                millis = Duration.between(start, instant).toMillis(),
                                uuid = uuid)
                    }
                } catch (e: Throwable) {
                    e.printStackTrace()
                }
            }
        }catch (e :Throwable){ e.printStackTrace() }
    }


    old.writeText(GsonBuilder().setPrettyPrinting().create().toJson(l))
    println("Entries logged: ${l.size}")
}