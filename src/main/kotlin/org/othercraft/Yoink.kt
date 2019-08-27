package org.othercraft

import com.google.gson.GsonBuilder
import discord4j.core.DiscordClient
import discord4j.core.DiscordClientBuilder
import discord4j.core.`object`.entity.GuildMessageChannel
import discord4j.core.`object`.util.Snowflake
import java.io.File
import java.time.Instant





val before: Snowflake = Snowflake.of(Instant.ofEpochMilli(1563512400000))
val log: Snowflake = Snowflake.of("600120188309864448")


val key = listOf("key.txt", "/srv/mc/othercraft/key.txt")
    .map { File(it) }.firstOrNull { it.exists() } ?: error("Can't find key")

val client: DiscordClient = DiscordClientBuilder(key.readText().trim()).build()



//TIME:f2b4fad3-fc2d-4799-8281-f78acad115c5:1521412*/

fun main() {
    client.login().subscribe()

    Thread.sleep(1000)

    while (!client.isConnected){
        Thread.sleep(1000)
        println("Not connected")
    }

    val list = client.getChannelById(log)
            .cast(GuildMessageChannel::class.java)
            .flatMapMany { it.getMessagesAfter(before) }

            .filter { it.author.isPresent }
            .filter { it.author.get().id == client.selfId.get() }
            .filter { it.content.isPresent }
            .filter {
                val content = it.content.get()
                content.matches(Regex("""^TIME:[a-z0-9\-]+:[0-9]+${'$'}"""))
            }
            .map {
                val split = it.content.get().split(":")
                Entry(
                        timeLogged = it.timestamp.toEpochMilli(),
                        millis = split[2].toLong(),
                        uuid = split[1])
            }
            .collectList()
            .block()
    entries.writeText(GsonBuilder().setPrettyPrinting().create().toJson(list))
    println("Entries logged: ${list?.size}")
}