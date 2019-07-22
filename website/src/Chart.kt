import kotlin.js.Date

external fun plotBarChart(dom: String, obj: dynamic)

class UserPair(val name: String, val time: Int)


fun charts(list: List<LogEntry>) {
    averageTimeChart(list)
    totalTimeChart(list)
    timePerDay(list)
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
                "<b>$username</b>:" + hm(y)
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
                    yAxis = 0
                }
        )
        tooltip = dyn {
            formatter = {
                val username = js("this.x") as String
                val min = js("this.y") as Int
                "<br>$username</br>:" + hm(min)
            }
        }
    }


    plotBarChart("totalTimeChart", totalTimeChart)
}

fun hm(min :Int):String {
    val h = (min / 60).toString().takeIf { it.isNotBlank() && it != "0" }?.let { "${it}h" } ?: ""
    val m = (min % 60).toString().let { "${it}m" }
    return "$h $m".trim()
}

fun List<LogEntry>.toUserPairs(): List<UserPair> {
    return distinctBy { it.username }
            .map { it.username }
            .map { username ->
                UserPair(
                        name = username,
                        time = filter { it.username == username }
                                .sumBy { it.msDuration.toString().toInt() }
                                .div(1000 * 60))
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