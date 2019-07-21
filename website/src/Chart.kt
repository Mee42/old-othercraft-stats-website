

external fun plotBarChart(dom: String,obj: dynamic)

fun chart1(list: List<LogEntry>) {
    class UserPair(val name :String, val time :Int)


    val users = list
            .distinctBy { it.username }
            .map { it.username }
            .map { username -> UserPair(
                    name = username,
                    time = list.filter { it.username == username }
                            .sumBy { it.msDuration.toString().toInt() }
                            .div(1000 * 60)) }
            .sortedByDescending { it.time }

    val totalTimeChart = dyn {
        chart = dyn {
            type = "bar"
        }
        title = dyn {
            text = "Total Time"
        }
        yAxis = arrayOf(dyn {

        },dyn {
            opposite = true
        })
        xAxis = dyn {
            categories = users.map { it.name }.toTypedArray()
        }
        series = arrayOf(
            dyn {
                name = "Total Minutes"
                data = users.map { it.time }.toTypedArray()
                yAxis = 0
            },
            dyn {
                name = "Average Minutes"
                yAxis = 1
                data = users//use users te preserve order
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
    plotBarChart("timeChart",totalTimeChart)

}





inline fun dyn(init: dynamic.() -> Unit): dynamic {
    val o = js("{}")
    init(o)
    return o
}