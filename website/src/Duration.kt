import kotlin.math.abs

class Duration(val seconds :Int){
    override fun toString(): String {
        val seconds = seconds
        val absSeconds = abs(seconds)
        val positive = "" +
                absSeconds / 3600 + "h " +
                absSeconds % 3600 / 60 + "m " +
                absSeconds % 60 + "s"
        return if (seconds < 0) "-$positive" else positive
    }
    operator fun plus(other: Duration):Duration{
        return Duration(this.seconds + other.seconds)
    }
}
