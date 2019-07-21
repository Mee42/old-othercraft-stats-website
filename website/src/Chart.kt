

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

    val chart = dyn {
        chart = dyn {
            type = "bar"
        }
        title = dyn {
            text = "Total Time"
        }
        yAxis = dyn {}
        xAxis = dyn {
            categories = users.map { it.name }.toTypedArray()
        }
        series = arrayOf(
            dyn {
                name = "Total Minutes"
                data = users.map { it.time }.toTypedArray()
            },
            dyn {
                name = "Average Minutes"
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
    plotBarChart("chart1",chart)

}





inline fun dyn(init: dynamic.() -> Unit): dynamic {
    val o = js("{}")
    init(o)
    return o
}