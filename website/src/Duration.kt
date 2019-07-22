import kotlin.math.abs

class Duration(private val seconds :Long){
    override fun toString(): String {
        val seconds = seconds
        val absSeconds = abs(seconds)
        val positive = "" +
                absSeconds / 3600 + "h " +
                absSeconds % 3600 / 60 + "m " +
                absSeconds % 60 + "s"
        return if (seconds < 0) "-$positive" else positive
    }
}
