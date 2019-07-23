import kotlin.js.Date

external fun plotBarChart(dom: String, obj: dynamic)

data class UserPair(val name: String, val time: Int)


fun charts(list: List<LogEntry>) {
    averageTimeChart(list)
    totalTimeChart(list)
    timePerDay(list)
    perDayChart(list)
}

fun averageTimeChart(list: List<LogEntry>) {
    val users = list.toUserPairs()
            .sortedByDescending {
                list.filter { a -> a.username == it.name }
                        .map { it.msDuration }
                        .average()
            }

    val averageTimeChart = dyn {
        chart = dyn {
            type = "bar"
        }
        title = dyn {
            text = "Average Session Time"
        }
        yAxis = arrayOf(dyn {})
        xAxis = dyn {
            categories = users.map { it.name }.toTypedArray()
        }
        series = arrayOf(
                dyn {
                    name = "Average minutes per session"
                    data = users
                            .map {
                                list.filter { a -> a.username == it.name }
                                        .map { it.msDuration }
                                        .average()
                                        .div(1000 * 60)
                                        .toInt()
                            }.toTypedArray()
                }
        )
    }

    plotBarChart("averageTimeChart", averageTimeChart)

}


fun timePerDay(list: List<LogEntry>) {
    data class WeekEntry(val day: Int, val username: String, val seconds: Int)

    fun dayNameForInt(int: Int): String = when (int) {
        0 -> "Sun";1 -> "Mon";2 -> "Tues";3 -> "Wed";4 -> "Thu";5 -> "Fri";6 -> "Sat"
        else -> error("unknown day $int")
    }


    val userLists = list.map {
        val long = it.msDuration
        long.use()
        WeekEntry(
                day = Date(milliseconds = it.time).getDay(),
                username = it.username,
                seconds = js("long / 1000") as Int)
    }

    fun between(a: Long, b: Long): Int {
        a.use()
        b.use()
        return (js("b - a") as Double).div(86400000).toInt()
    }

    val usernames = userLists.distinctBy { it.username }.map { it.username }
    val numberOfWeeks = between(list.minBy { it.time }!!.time, list.maxBy { it.time }!!.time)
            .toDouble()
            .div(604800000)
            .plus(1)
            .toInt()

    val chart = dyn {
        chart = dyn {
            type = "column"
        }
        title = dyn {
            text = "Time on each day. Weeks: $numberOfWeeks"
        }
        yAxis = arrayOf(dyn {})
        xAxis = dyn {
            categories = (0 until 7).map { dayNameForInt(it) }.toTypedArray()
        }
        series = usernames.map { username ->
            dyn {
                name = username
                data = (0 until 7).map { day ->
                    userLists
                            .filter { it.day == day && it.username == username }
                            .map { it.seconds }
                            .sum()
                            .div(60)
                            .div(numberOfWeeks)
                }.toTypedArray()
            }
        }.toTypedArray()

        tooltip = dyn {
            formatter = {
                val username = js("this.series.name")
                val y = js("this.y") as Int
                "$username:<b>" + hm(y) + "</b>"
            }
        }
    }

    plotBarChart("timePerDayChart", chart)
}


fun totalTimeChart(list: List<LogEntry>) {


    val users = list.toUserPairs().sortedByDescending { it.time }

    val totalTimeChart = dyn {
        chart = dyn {
            type = "bar"
        }
        title = dyn {
            text = "Total Time"
        }
        yAxis = arrayOf(dyn {})
        xAxis = dyn {
            categories = users.map { it.name }.toTypedArray()
        }
        series = arrayOf(
                dyn {
                    name = "Total minutes, all time"
                    data = users.map { it.time }.toTypedArray()
                }
        )
        tooltip = dyn {
            formatter = {
                val username = js("this.x") as String
                val min = js("this.y") as Int
                "$username:<b>" + hm(min) + "</b>"
            }
        }
    }


    plotBarChart("totalTimeChart", totalTimeChart)
}

fun perDayChart(list: List<LogEntry>){
    data class HouredEntry(
            val hour :Int,
            val username :String,
            val duration: Duration)


    val mapped = list.map {
        HouredEntry(
                hour = Date(it.time).getHours(),
                username = it.username,
                duration = Duration(it.msDuration / 1000))
    }

    val folded = mapped.distinctBy { it.hour.toString() + it.username }
            .map {
                HouredEntry(
                        hour = it.hour,
                        username = it.username,
                        duration = mapped
                                .filter { u -> u.hour == it.hour }
                                .filter { u -> u.username == it.username }
                                .map { u -> u.duration }
                                .fold(Duration(0)){a,b->a+b}
                )
            }


    val better = folded + (0 until 24).map {
        HouredEntry(
                hour = it,
                username = "average",
                duration = folded.filter { u -> u.hour == it }
                        .map { u -> u.duration }
                        .fold(Duration(0)){a,b->a+b}
                        .let { u -> Duration(u.seconds.div(list.map { e -> e.username }.distinct().size).times(3)) }
        )

    }


    val chart = dyn {
//        chart = dyn {
//            type = "bar"
//        }
        title = dyn {
            text = "Time, split by hour."
        }
        yAxis = dyn {}
        xAxis = dyn {
            categories = (0 until 24)
                    .map { "" + (it % 12) + if (it > 11) "pm" else "am" }
                    .map {
                        when(it){
                            "0am" -> "12am"
                            "0pm" -> "12pm"
                            else -> it
                        }
                    }
                    .toTypedArray()
        }
        series = better.distinctBy { it.username }.map { it.username }.map { username ->
            dyn {
                name = username
                data = (0 until 24).map { hour ->
                    better.firstOrNull { it.hour == hour && it.username == username }?.duration?.seconds?.div(60) ?: 0
                }.toTypedArray()
                lineWidth = if (username == "average") 5 else 2
                if (username == "average"){
                    color = "#111111"
                }
            }
        }.toTypedArray()
//        tooltip = dyn {
//            formatter = {
//                val username = js("this.x") as String
//                val min = js("this.y") as Int
//                "$username:<b>" + hm(min) + "</b>"
//            }
//        }
    }

    plotBarChart("perDayChart",chart)
}



fun hm(min :Int):String {
    val h = (min / 60).toString().takeIf { it.isNotBlank() && it != "0" }?.let { "${it}h" } ?: ""
    val m = (min % 60).toString().let { "${it}m" }
    return "$h $m".trim()
}

fun List<LogEntry>.toUserPairs(): List<UserPair> {
    return distinctBy { it.username }.map { it.username }
            .map { username ->
                UserPair(
                        name = username,
                        time = filter { it.username == username }
                                .fold(0) { a,b -> a + b.msDuration }
                                .div(60000)
                )
            }
}


fun <T> T.use(): T {
    this.asDynamic();return this
}

inline fun dyn(init: dynamic.() -> Unit): dynamic {
    val o = js("{}")
    init(o)
    return o
}