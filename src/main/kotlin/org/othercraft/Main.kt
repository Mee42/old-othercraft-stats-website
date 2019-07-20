package org.othercraft

import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import java.io.File
import java.time.Duration
import java.time.Instant
import java.util.*
import kotlin.math.abs


val entries = File("res/entries.json")
val usernames = File("res/whitelist.json")


data class UsernamePair(val uuid: String,val name: String)



data class Entry(val timeLogged: Long, val millis: Long, val uuid: String){
    val instant: Instant
        get() = Instant.ofEpochMilli(timeLogged)
    val duration: Duration
        get() = Duration.ofMillis(millis)

    val username: String
        get() = usernames.firstOrNull { it.uuid == uuid }?.name ?: error("cant find name for $uuid")


    companion object{
        lateinit var usernames: List<UsernamePair>
    }
}


fun main() {
    val usernameType = object : TypeToken<ArrayList<UsernamePair>>(){}
    Entry.usernames = Gson().fromJson<ArrayList<UsernamePair>>(usernames.readText(),usernameType.type)
    print("set username variable")

    val listType = object : TypeToken<ArrayList<Entry>>(){}
    val list = Gson().fromJson<ArrayList<Entry>>(entries.readText(),listType.type)


    for (entry in list){
        println(entry.instant.toString() + " : " + formatDuration(entry.duration) + " : " + entry.username)
    }


    val usernamePad = Entry.usernames.map { it.name.length }.max() ?: error("no users?")

    val totalTime = list.distinctBy { it.uuid }
            .map { entry ->
                Entry(
                        uuid = entry.uuid,
                        timeLogged = 0,
                        millis = list
                                .filter { it.uuid == entry.uuid }
                                .map { it.millis }
                                .sum()
                )
            }

     println("    ----    totals    ----    ")

     for (entry in totalTime.sortedBy { it.duration }){
        println(entry.username.padEnd(usernamePad) +  " : " + formatDuration(entry.duration))
    }

    println("    ----    average time    ----    ")
    for (entry in totalTime
            .map {
                it.username to it.duration.dividedBy(list.count { e -> e.uuid == it.uuid }.toLong())
            }
            .sortedBy { it.second }){
        println(entry.first.padEnd(usernamePad) + " : " + formatDuration(entry.second))
    }
}

fun formatDuration(duration: Duration): String {
    val seconds = duration.seconds
    val absSeconds = abs(seconds)
    val positive = String.format(
            "%d:%02d:%02d",
            absSeconds / 3600,
            absSeconds % 3600 / 60,
            absSeconds % 60)
    return if (seconds < 0) "-$positive" else positive
}