

external fun plotBarChart(dom: String,obj: dynamic)

class UserPair(val name :String, val time :Int)


fun charts(list: List<LogEntry>) {
    averageTimeChart(list)
    totalTimeChart(list)


}

fun averageTimeChart(list: List<LogEntry>){
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

    plotBarChart("averageTimeChart",averageTimeChart)

}

fun totalTimeChart(list: List<LogEntry>){


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
    }


    plotBarChart("totalTimeChart",totalTimeChart)
}


fun List<LogEntry>.toUserPairs():List<UserPair>{
    return distinctBy { it.username }
            .map { it.username }
            .map { username -> UserPair(
                    name = username,
                    time = filter { it.username == username }
                            .sumBy { it.msDuration.toString().toInt() }
                            .div(1000 * 60)) }
}


inline fun dyn(init: dynamic.() -> Unit): dynamic {
    val o = js("{}")
    init(o)
    return o
}