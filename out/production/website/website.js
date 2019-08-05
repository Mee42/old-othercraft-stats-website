if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'website'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'website'.");
}
var website = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var flatten = Kotlin.kotlin.collections.flatten_u0ad8z$;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var average = Kotlin.kotlin.collections.average_plj8ka$;
  var numberToInt = Kotlin.numberToInt;
  var ensureNotNull = Kotlin.ensureNotNull;
  var sum = Kotlin.kotlin.collections.sum_plj8ka$;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var toString = Kotlin.toString;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var Comparator = Kotlin.kotlin.Comparator;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var iterator = Kotlin.kotlin.js.iterator_s8jyvk$;
  var Unit = Kotlin.kotlin.Unit;
  var appendText = Kotlin.kotlin.dom.appendText_46n0ku$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareByDescending$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  function UserPair(name, time) {
    this.name = name;
    this.time = time;
  }
  UserPair.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserPair',
    interfaces: []
  };
  UserPair.prototype.component1 = function () {
    return this.name;
  };
  UserPair.prototype.component2 = function () {
    return this.time;
  };
  UserPair.prototype.copy_bm4lxs$ = function (name, time) {
    return new UserPair(name === void 0 ? this.name : name, time === void 0 ? this.time : time);
  };
  UserPair.prototype.toString = function () {
    return 'UserPair(name=' + Kotlin.toString(this.name) + (', time=' + Kotlin.toString(this.time)) + ')';
  };
  UserPair.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    return result;
  };
  UserPair.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.time, other.time)))));
  };
  function charts(list) {
    println(list);
    averageTimeChart(list);
    totalTimeChart(list);
    timePerDay(list);
    perDayChart(list);
    yearChart(list);
  }
  function yearChart$lambda$lambda$lambda() {
    var tmp$;
    var sec = typeof (tmp$ = this.point.value) === 'number' ? tmp$ : throwCCE();
    return hm(sec / 60 | 0);
  }
  function yearChart(list) {
    var o = {};
    var o_0 = {};
    o_0.type = 'heatmap';
    o.chart = o_0;
    var o_1 = {};
    o_1.text = 'THIS IS THE TITLE';
    o.title = o_1;
    var o_2 = {};
    var $receiver = new IntRange(0, 52);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.toString());
    }
    o_2.categories = copyToArray(destination);
    o.xAxis = o_2;
    var o_3 = {};
    o_3.categories = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    o.yAxis = o_3;
    var o_4 = {};
    o_4.min = 0;
    o_4.minColor = '#FFFFFF';
    o_4.maxColor = '#000000';
    o.colorAxis = o_4;
    var o_5 = {};
    o_5.name = 'Activity on this day';
    o_5.borderWidth = 1;
    var $receiver_0 = new IntRange(0, 52);
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      var tmp$_1 = destination_0.add_11rb$;
      var $receiver_1 = until(0, 7);
      var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_2;
      tmp$_2 = $receiver_1.iterator();
      while (tmp$_2.hasNext()) {
        var item_1 = tmp$_2.next();
        var tmp$_3 = destination_1.add_11rb$;
        var destination_2 = ArrayList_init_0();
        var tmp$_4;
        tmp$_4 = list.iterator();
        while (tmp$_4.hasNext()) {
          var element = tmp$_4.next();
          var date = new Date(element.time);
          if (date.getDay() === item_1 && getWeekNumber(date) === item_0)
            destination_2.add_11rb$(element);
        }
        var destination_3 = ArrayList_init(collectionSizeOrDefault(destination_2, 10));
        var tmp$_5;
        tmp$_5 = destination_2.iterator();
        while (tmp$_5.hasNext()) {
          var item_2 = tmp$_5.next();
          destination_3.add_11rb$(new Duration(item_2.msDuration / 1000 | 0));
        }
        var tmp$_6;
        var accumulator = new Duration(0);
        tmp$_6 = destination_3.iterator();
        while (tmp$_6.hasNext()) {
          var element_0 = tmp$_6.next();
          accumulator = accumulator.plus_vvi6vg$(element_0);
        }
        tmp$_3.call(destination_1, copyToArray(listOf([item_0, item_1, accumulator.seconds])));
      }
      tmp$_1.call(destination_0, destination_1);
    }
    o_5.data = copyToArray(flatten(destination_0));
    o.series = [o_5];
    var o_6 = {};
    o_6.formatter = yearChart$lambda$lambda$lambda;
    o.tooltip = o_6;
    var chart = o;
    plotBarChart('year', chart);
  }
  function averageTimeChart$lambda(closure$list) {
    return function (it) {
      var $receiver = closure$list;
      var destination = ArrayList_init_0();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (equals(element.username, it.name))
          destination.add_11rb$(element);
      }
      var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(item.msDuration);
      }
      return average(destination_0);
    };
  }
  function averageTimeChart(list) {
    var users = sortedWith(toUserPairs(list), new Comparator$ObjectLiteral(compareByDescending$lambda(averageTimeChart$lambda(list))));
    var o = {};
    var o_0 = {};
    o_0.type = 'bar';
    o.chart = o_0;
    var o_1 = {};
    o_1.text = 'Average Session Time';
    o.title = o_1;
    var o_2 = {};
    o.yAxis = [o_2];
    var o_3 = {};
    var destination = ArrayList_init(collectionSizeOrDefault(users, 10));
    var tmp$;
    tmp$ = users.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.name);
    }
    o_3.categories = copyToArray(destination);
    o.xAxis = o_3;
    var o_4 = {};
    o_4.name = 'Average minutes per session';
    var destination_0 = ArrayList_init(collectionSizeOrDefault(users, 10));
    var tmp$_0;
    tmp$_0 = users.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      var tmp$_1 = destination_0.add_11rb$;
      var destination_1 = ArrayList_init_0();
      var tmp$_2;
      tmp$_2 = list.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        if (equals(element.username, item_0.name))
          destination_1.add_11rb$(element);
      }
      var destination_2 = ArrayList_init(collectionSizeOrDefault(destination_1, 10));
      var tmp$_3;
      tmp$_3 = destination_1.iterator();
      while (tmp$_3.hasNext()) {
        var item_1 = tmp$_3.next();
        destination_2.add_11rb$(item_1.msDuration);
      }
      tmp$_1.call(destination_0, numberToInt(average(destination_2) / 60000));
    }
    o_4.data = copyToArray(destination_0);
    o.series = [o_4];
    var averageTimeChart = o;
    plotBarChart('averageTimeChart', averageTimeChart);
  }
  function timePerDay$WeekEntry(day, username, seconds) {
    this.day = day;
    this.username = username;
    this.seconds = seconds;
  }
  timePerDay$WeekEntry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WeekEntry',
    interfaces: []
  };
  timePerDay$WeekEntry.prototype.component1 = function () {
    return this.day;
  };
  timePerDay$WeekEntry.prototype.component2 = function () {
    return this.username;
  };
  timePerDay$WeekEntry.prototype.component3 = function () {
    return this.seconds;
  };
  timePerDay$WeekEntry.prototype.copy_jl0c9m$ = function (day, username, seconds) {
    return new timePerDay$WeekEntry(day === void 0 ? this.day : day, username === void 0 ? this.username : username, seconds === void 0 ? this.seconds : seconds);
  };
  timePerDay$WeekEntry.prototype.toString = function () {
    return 'WeekEntry(day=' + Kotlin.toString(this.day) + (', username=' + Kotlin.toString(this.username)) + (', seconds=' + Kotlin.toString(this.seconds)) + ')';
  };
  timePerDay$WeekEntry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.day) | 0;
    result = result * 31 + Kotlin.hashCode(this.username) | 0;
    result = result * 31 + Kotlin.hashCode(this.seconds) | 0;
    return result;
  };
  timePerDay$WeekEntry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.day, other.day) && Kotlin.equals(this.username, other.username) && Kotlin.equals(this.seconds, other.seconds)))));
  };
  function timePerDay$dayNameForInt(int) {
    switch (int) {
      case 0:
        return 'Sun';
      case 1:
        return 'Mon';
      case 2:
        return 'Tues';
      case 3:
        return 'Wed';
      case 4:
        return 'Thu';
      case 5:
        return 'Fri';
      case 6:
        return 'Sat';
      default:throw IllegalStateException_init(('unknown day ' + int).toString());
    }
  }
  function timePerDay$between(a, b) {
    var tmp$;
    use(a);
    use(b);
    return numberToInt((typeof (tmp$ = b - a) === 'number' ? tmp$ : throwCCE()) / 86400000);
  }
  function timePerDay$lambda$lambda$lambda() {
    var tmp$;
    var username = this.series.name;
    var y = typeof (tmp$ = this.y) === 'number' ? tmp$ : throwCCE();
    return username.toString() + ':<b>' + hm(y) + '<\/b>';
  }
  function timePerDay(list) {
    var dayNameForInt = timePerDay$dayNameForInt;
    var destination = ArrayList_init(collectionSizeOrDefault(list, 10));
    var tmp$;
    tmp$ = list.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1;
      var long = item.msDuration;
      use(long);
      tmp$_0.call(destination, new timePerDay$WeekEntry((new Date(item.time)).getDay(), item.username, typeof (tmp$_1 = long / 1000) === 'number' ? tmp$_1 : throwCCE()));
    }
    var userLists = destination;
    var between = timePerDay$between;
    var tmp$_2;
    var set = HashSet_init();
    var list_0 = ArrayList_init_0();
    tmp$_2 = userLists.iterator();
    while (tmp$_2.hasNext()) {
      var e = tmp$_2.next();
      var key = e.username;
      if (set.add_11rb$(key))
        list_0.add_11rb$(e);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(list_0, 10));
    var tmp$_3;
    tmp$_3 = list_0.iterator();
    while (tmp$_3.hasNext()) {
      var item_0 = tmp$_3.next();
      destination_0.add_11rb$(item_0.username);
    }
    var usernames = destination_0;
    var minBy$result;
    minBy$break: do {
      var iterator = list.iterator();
      if (!iterator.hasNext()) {
        minBy$result = null;
        break minBy$break;
      }
      var minElem = iterator.next();
      if (!iterator.hasNext()) {
        minBy$result = minElem;
        break minBy$break;
      }
      var minValue = minElem.time;
      do {
        var e_0 = iterator.next();
        var v = e_0.time;
        if (Kotlin.compareTo(minValue, v) > 0) {
          minElem = e_0;
          minValue = v;
        }
      }
       while (iterator.hasNext());
      minBy$result = minElem;
    }
     while (false);
    var tmp$_4 = ensureNotNull(minBy$result).time;
    var maxBy$result;
    maxBy$break: do {
      var iterator_0 = list.iterator();
      if (!iterator_0.hasNext()) {
        maxBy$result = null;
        break maxBy$break;
      }
      var maxElem = iterator_0.next();
      if (!iterator_0.hasNext()) {
        maxBy$result = maxElem;
        break maxBy$break;
      }
      var maxValue = maxElem.time;
      do {
        var e_1 = iterator_0.next();
        var v_0 = e_1.time;
        if (Kotlin.compareTo(maxValue, v_0) < 0) {
          maxElem = e_1;
          maxValue = v_0;
        }
      }
       while (iterator_0.hasNext());
      maxBy$result = maxElem;
    }
     while (false);
    var numberOfWeeks = numberToInt(between(tmp$_4, ensureNotNull(maxBy$result).time) / 604800000 + 1);
    var o = {};
    var o_0 = {};
    o_0.type = 'column';
    o.chart = o_0;
    var o_1 = {};
    o_1.text = 'Time on each day. Weeks: ' + numberOfWeeks;
    o.title = o_1;
    var o_2 = {};
    o.yAxis = [o_2];
    var o_3 = {};
    var $receiver = until(0, 7);
    var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_5;
    tmp$_5 = $receiver.iterator();
    while (tmp$_5.hasNext()) {
      var item_1 = tmp$_5.next();
      destination_1.add_11rb$(dayNameForInt(item_1));
    }
    o_3.categories = copyToArray(destination_1);
    o.xAxis = o_3;
    var destination_2 = ArrayList_init(collectionSizeOrDefault(usernames, 10));
    var tmp$_6;
    tmp$_6 = usernames.iterator();
    while (tmp$_6.hasNext()) {
      var item_2 = tmp$_6.next();
      var tmp$_7 = destination_2.add_11rb$;
      var o_4 = {};
      o_4.name = item_2;
      var $receiver_0 = until(0, 7);
      var destination_3 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_8;
      tmp$_8 = $receiver_0.iterator();
      while (tmp$_8.hasNext()) {
        var item_3 = tmp$_8.next();
        var tmp$_9 = destination_3.add_11rb$;
        var destination_4 = ArrayList_init_0();
        var tmp$_10;
        tmp$_10 = userLists.iterator();
        while (tmp$_10.hasNext()) {
          var element = tmp$_10.next();
          if (element.day === item_3 && equals(element.username, item_2))
            destination_4.add_11rb$(element);
        }
        var destination_5 = ArrayList_init(collectionSizeOrDefault(destination_4, 10));
        var tmp$_11;
        tmp$_11 = destination_4.iterator();
        while (tmp$_11.hasNext()) {
          var item_4 = tmp$_11.next();
          destination_5.add_11rb$(item_4.seconds);
        }
        tmp$_9.call(destination_3, (sum(destination_5) / 60 | 0) / numberOfWeeks | 0);
      }
      o_4.data = copyToArray(destination_3);
      tmp$_7.call(destination_2, o_4);
    }
    o.series = copyToArray(destination_2);
    var o_5 = {};
    o_5.formatter = timePerDay$lambda$lambda$lambda;
    o.tooltip = o_5;
    var chart = o;
    plotBarChart('timePerDayChart', chart);
  }
  function totalTimeChart$lambda(it) {
    return it.time;
  }
  function totalTimeChart$lambda$lambda$lambda() {
    var tmp$, tmp$_0;
    var username = typeof (tmp$ = this.x) === 'string' ? tmp$ : throwCCE();
    var min = typeof (tmp$_0 = this.y) === 'number' ? tmp$_0 : throwCCE();
    return username + ':<b>' + hm(min) + '<\/b>';
  }
  function totalTimeChart(list) {
    var users = sortedWith(toUserPairs(list), new Comparator$ObjectLiteral(compareByDescending$lambda(totalTimeChart$lambda)));
    println(users);
    var o = {};
    var o_0 = {};
    o_0.type = 'bar';
    o.chart = o_0;
    var o_1 = {};
    o_1.text = 'Total Time';
    o.title = o_1;
    var o_2 = {};
    o.yAxis = [o_2];
    var o_3 = {};
    var destination = ArrayList_init(collectionSizeOrDefault(users, 10));
    var tmp$;
    tmp$ = users.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.name);
    }
    o_3.categories = copyToArray(destination);
    o.xAxis = o_3;
    var o_4 = {};
    o_4.name = 'Total minutes, all time';
    var destination_0 = ArrayList_init(collectionSizeOrDefault(users, 10));
    var tmp$_0;
    tmp$_0 = users.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      destination_0.add_11rb$(item_0.time);
    }
    o_4.data = copyToArray(destination_0);
    o.series = [o_4];
    var o_5 = {};
    o_5.formatter = totalTimeChart$lambda$lambda$lambda;
    o.tooltip = o_5;
    var totalTimeChart = o;
    plotBarChart('totalTimeChart', totalTimeChart);
  }
  function perDayChart$HouredEntry(hour, username, duration) {
    this.hour = hour;
    this.username = username;
    this.duration = duration;
  }
  perDayChart$HouredEntry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HouredEntry',
    interfaces: []
  };
  perDayChart$HouredEntry.prototype.component1 = function () {
    return this.hour;
  };
  perDayChart$HouredEntry.prototype.component2 = function () {
    return this.username;
  };
  perDayChart$HouredEntry.prototype.component3 = function () {
    return this.duration;
  };
  perDayChart$HouredEntry.prototype.copy_g803o4$ = function (hour, username, duration) {
    return new perDayChart$HouredEntry(hour === void 0 ? this.hour : hour, username === void 0 ? this.username : username, duration === void 0 ? this.duration : duration);
  };
  perDayChart$HouredEntry.prototype.toString = function () {
    return 'HouredEntry(hour=' + Kotlin.toString(this.hour) + (', username=' + Kotlin.toString(this.username)) + (', duration=' + Kotlin.toString(this.duration)) + ')';
  };
  perDayChart$HouredEntry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.hour) | 0;
    result = result * 31 + Kotlin.hashCode(this.username) | 0;
    result = result * 31 + Kotlin.hashCode(this.duration) | 0;
    return result;
  };
  perDayChart$HouredEntry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.hour, other.hour) && Kotlin.equals(this.username, other.username) && Kotlin.equals(this.duration, other.duration)))));
  };
  function perDayChart(list) {
    var destination = ArrayList_init(collectionSizeOrDefault(list, 10));
    var tmp$;
    tmp$ = list.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new perDayChart$HouredEntry((new Date(item.time)).getHours(), item.username, new Duration(item.msDuration / 1000 | 0)));
    }
    var mapped = destination;
    var tmp$_0;
    var set = HashSet_init();
    var list_0 = ArrayList_init_0();
    tmp$_0 = mapped.iterator();
    while (tmp$_0.hasNext()) {
      var e = tmp$_0.next();
      var key = e.hour.toString() + e.username;
      if (set.add_11rb$(key))
        list_0.add_11rb$(e);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(list_0, 10));
    var tmp$_1;
    tmp$_1 = list_0.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      var tmp$_2 = destination_0.add_11rb$;
      var tmp$_3 = item_0.hour;
      var tmp$_4 = item_0.username;
      var destination_1 = ArrayList_init_0();
      var tmp$_5;
      tmp$_5 = mapped.iterator();
      while (tmp$_5.hasNext()) {
        var element = tmp$_5.next();
        if (element.hour === item_0.hour)
          destination_1.add_11rb$(element);
      }
      var destination_2 = ArrayList_init_0();
      var tmp$_6;
      tmp$_6 = destination_1.iterator();
      while (tmp$_6.hasNext()) {
        var element_0 = tmp$_6.next();
        if (equals(element_0.username, item_0.username))
          destination_2.add_11rb$(element_0);
      }
      var destination_3 = ArrayList_init(collectionSizeOrDefault(destination_2, 10));
      var tmp$_7;
      tmp$_7 = destination_2.iterator();
      while (tmp$_7.hasNext()) {
        var item_1 = tmp$_7.next();
        destination_3.add_11rb$(item_1.duration);
      }
      var tmp$_8;
      var accumulator = new Duration(0);
      tmp$_8 = destination_3.iterator();
      while (tmp$_8.hasNext()) {
        var element_1 = tmp$_8.next();
        accumulator = accumulator.plus_vvi6vg$(element_1);
      }
      tmp$_2.call(destination_0, new perDayChart$HouredEntry(tmp$_3, tmp$_4, accumulator));
    }
    var folded = destination_0;
    var $receiver = until(0, 24);
    var destination_4 = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_9;
    tmp$_9 = $receiver.iterator();
    while (tmp$_9.hasNext()) {
      var item_2 = tmp$_9.next();
      var tmp$_10 = destination_4.add_11rb$;
      var destination_5 = ArrayList_init_0();
      var tmp$_11;
      tmp$_11 = folded.iterator();
      while (tmp$_11.hasNext()) {
        var element_2 = tmp$_11.next();
        if (element_2.hour === item_2)
          destination_5.add_11rb$(element_2);
      }
      var destination_6 = ArrayList_init(collectionSizeOrDefault(destination_5, 10));
      var tmp$_12;
      tmp$_12 = destination_5.iterator();
      while (tmp$_12.hasNext()) {
        var item_3 = tmp$_12.next();
        destination_6.add_11rb$(item_3.duration);
      }
      var tmp$_13;
      var accumulator_0 = new Duration(0);
      tmp$_13 = destination_6.iterator();
      while (tmp$_13.hasNext()) {
        var element_3 = tmp$_13.next();
        accumulator_0 = accumulator_0.plus_vvi6vg$(element_3);
      }
      var tmp$_14 = accumulator_0.seconds;
      var destination_7 = ArrayList_init(collectionSizeOrDefault(list, 10));
      var tmp$_15;
      tmp$_15 = list.iterator();
      while (tmp$_15.hasNext()) {
        var item_4 = tmp$_15.next();
        destination_7.add_11rb$(item_4.username);
      }
      tmp$_10.call(destination_4, new perDayChart$HouredEntry(item_2, 'average', new Duration((tmp$_14 / distinct(destination_7).size | 0) * 3 | 0)));
    }
    var better = plus(folded, destination_4);
    var o = {};
    var o_0 = {};
    o_0.text = 'Time, split by hour.';
    o.title = o_0;
    var o_1 = {};
    o.yAxis = o_1;
    var o_2 = {};
    var $receiver_0 = until(0, 24);
    var destination_8 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_16;
    tmp$_16 = $receiver_0.iterator();
    while (tmp$_16.hasNext()) {
      var item_5 = tmp$_16.next();
      destination_8.add_11rb$('' + toString(item_5 % 12) + (item_5 > 11 ? 'pm' : 'am'));
    }
    var destination_9 = ArrayList_init(collectionSizeOrDefault(destination_8, 10));
    var tmp$_17;
    tmp$_17 = destination_8.iterator();
    loop_label: while (tmp$_17.hasNext()) {
      var item_6 = tmp$_17.next();
      var tmp$_18 = destination_9.add_11rb$;
      var transform$result;
      transform$break: do {
        switch (item_6) {
          case '0am':
            transform$result = '12am';
            break transform$break;
          case '0pm':
            transform$result = '12pm';
            break transform$break;
          default:transform$result = item_6;
            break transform$break;
        }
      }
       while (false);
      tmp$_18.call(destination_9, transform$result);
    }
    o_2.categories = copyToArray(destination_9);
    o.xAxis = o_2;
    var tmp$_19;
    var set_0 = HashSet_init();
    var list_1 = ArrayList_init_0();
    tmp$_19 = better.iterator();
    while (tmp$_19.hasNext()) {
      var e_0 = tmp$_19.next();
      var key_0 = e_0.username;
      if (set_0.add_11rb$(key_0))
        list_1.add_11rb$(e_0);
    }
    var destination_10 = ArrayList_init(collectionSizeOrDefault(list_1, 10));
    var tmp$_20;
    tmp$_20 = list_1.iterator();
    while (tmp$_20.hasNext()) {
      var item_7 = tmp$_20.next();
      destination_10.add_11rb$(item_7.username);
    }
    var destination_11 = ArrayList_init(collectionSizeOrDefault(destination_10, 10));
    var tmp$_21;
    tmp$_21 = destination_10.iterator();
    while (tmp$_21.hasNext()) {
      var item_8 = tmp$_21.next();
      var tmp$_22 = destination_11.add_11rb$;
      var o_3 = {};
      o_3.name = item_8;
      var $receiver_1 = until(0, 24);
      var destination_12 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_23;
      tmp$_23 = $receiver_1.iterator();
      loop_label: while (tmp$_23.hasNext()) {
        var item_9 = tmp$_23.next();
        var tmp$_24 = destination_12.add_11rb$;
        var tmp$_25, tmp$_26, tmp$_27, tmp$_28;
        var firstOrNull$result;
        firstOrNull$break: do {
          var tmp$_29;
          tmp$_29 = better.iterator();
          while (tmp$_29.hasNext()) {
            var element_4 = tmp$_29.next();
            if (element_4.hour === item_9 && equals(element_4.username, item_8)) {
              firstOrNull$result = element_4;
              break firstOrNull$break;
            }
          }
          firstOrNull$result = null;
        }
         while (false);
        tmp$_24.call(destination_12, (tmp$_28 = (tmp$_27 = (tmp$_26 = (tmp$_25 = firstOrNull$result) != null ? tmp$_25.duration : null) != null ? tmp$_26.seconds : null) != null ? tmp$_27 / 60 | 0 : null) != null ? tmp$_28 : 0);
      }
      o_3.data = copyToArray(destination_12);
      o_3.lineWidth = equals(item_8, 'average') ? 5 : 2;
      if (equals(item_8, 'average')) {
        o_3.color = '#111111';
      }
      tmp$_22.call(destination_11, o_3);
    }
    o.series = copyToArray(destination_11);
    var chart = o;
    plotBarChart('perDayChart', chart);
  }
  function hm(min) {
    var tmp$, tmp$_0;
    var $receiver = (min / 60 | 0).toString();
    var h = (tmp$_0 = (tmp$ = !isBlank($receiver) && !equals($receiver, '0') ? $receiver : null) != null ? tmp$ + 'h' : null) != null ? tmp$_0 : '';
    var m = (min % 60).toString() + 'm';
    var $receiver_0 = h + ' ' + m;
    var tmp$_1;
    return trim(Kotlin.isCharSequence(tmp$_1 = $receiver_0) ? tmp$_1 : throwCCE()).toString();
  }
  function toUserPairs($receiver) {
    var tmp$;
    var set = HashSet_init();
    var list = ArrayList_init_0();
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      var key = e.username;
      if (set.add_11rb$(key))
        list.add_11rb$(e);
    }
    var destination = ArrayList_init(collectionSizeOrDefault(list, 10));
    var tmp$_0;
    tmp$_0 = list.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.username);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      var tmp$_2 = destination_0.add_11rb$;
      var destination_1 = ArrayList_init_0();
      var tmp$_3;
      tmp$_3 = $receiver.iterator();
      while (tmp$_3.hasNext()) {
        var element = tmp$_3.next();
        if (equals(element.username, item_0))
          destination_1.add_11rb$(element);
      }
      var tmp$_4;
      var accumulator = 0;
      tmp$_4 = destination_1.iterator();
      while (tmp$_4.hasNext()) {
        var element_0 = tmp$_4.next();
        accumulator = accumulator + element_0.msDuration | 0;
      }
      tmp$_2.call(destination_0, new UserPair(item_0, accumulator / 60000 | 0));
    }
    return destination_0;
  }
  function use($receiver) {
    return $receiver;
  }
  var dyn = defineInlineFunction('website.dyn_5ij4lk$', function (init) {
    var o = {};
    init(o);
    return o;
  });
  function Duration(seconds) {
    this.seconds = seconds;
  }
  Duration.prototype.toString = function () {
    var seconds = this.seconds;
    var absSeconds = abs(seconds);
    var positive = '' + toString(absSeconds / 3600 | 0) + 'h ' + toString(absSeconds % 3600 / 60 | 0) + 'm ' + toString(absSeconds % 60) + 's';
    return seconds < 0 ? '-' + positive : positive;
  };
  Duration.prototype.plus_vvi6vg$ = function (other) {
    return new Duration(this.seconds + other.seconds | 0);
  };
  Duration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Duration',
    interfaces: []
  };
  function LogEntry(username, time, msDuration) {
    this.username = username;
    this.time = time;
    this.msDuration = msDuration;
  }
  LogEntry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogEntry',
    interfaces: []
  };
  LogEntry.prototype.component1 = function () {
    return this.username;
  };
  LogEntry.prototype.component2 = function () {
    return this.time;
  };
  LogEntry.prototype.component3 = function () {
    return this.msDuration;
  };
  LogEntry.prototype.copy_dckg8j$ = function (username, time, msDuration) {
    return new LogEntry(username === void 0 ? this.username : username, time === void 0 ? this.time : time, msDuration === void 0 ? this.msDuration : msDuration);
  };
  LogEntry.prototype.toString = function () {
    return 'LogEntry(username=' + Kotlin.toString(this.username) + (', time=' + Kotlin.toString(this.time)) + (', msDuration=' + Kotlin.toString(this.msDuration)) + ')';
  };
  LogEntry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.username) | 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    result = result * 31 + Kotlin.hashCode(this.msDuration) | 0;
    return result;
  };
  LogEntry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.username, other.username) && Kotlin.equals(this.time, other.time) && Kotlin.equals(this.msDuration, other.msDuration)))));
  };
  function map$getUsernameForUUID(closure$usernames) {
    return function (uuid) {
      var tmp$;
      tmp$ = iterator(closure$usernames);
      while (tmp$.hasNext()) {
        var q = tmp$.next();
        if (q.uuid == uuid) {
          return q.name;
        }
      }
      return uuid;
    };
  }
  function map$lambda(closure$list, closure$getUsernameForUUID) {
    return function (entry) {
      var timeLogged = entry.timeLogged;
      var millis = entry.millis;
      var uuid = entry.uuid;
      var $receiver = closure$list;
      var element = new LogEntry(closure$getUsernameForUUID(uuid), timeLogged, millis);
      $receiver.add_11rb$(element);
      return Unit;
    };
  }
  function map(usernamesJ, entriesJ, oldJ) {
    var tmp$, tmp$_0;
    var usernames = JSON.parse(usernamesJ);
    var getUsernameForUUID = map$getUsernameForUUID(usernames);
    var entries = JSON.parse(entriesJ);
    var old = JSON.parse(oldJ);
    var list = ArrayList_init_0();
    var addDynamicToList = map$lambda(list, getUsernameForUUID);
    tmp$ = iterator(entries);
    while (tmp$.hasNext()) {
      var entry = tmp$.next();
      addDynamicToList(entry);
    }
    tmp$_0 = iterator(old);
    while (tmp$_0.hasNext()) {
      var entry_0 = tmp$_0.next();
      addDynamicToList(entry_0);
    }
    return list;
  }
  function getList$test(closure$usernames, closure$entries, closure$old, closure$callback) {
    return function () {
      if (closure$usernames.v != null && closure$entries.v != null && closure$old.v != null) {
        closure$callback(map(ensureNotNull(closure$usernames.v), ensureNotNull(closure$entries.v), ensureNotNull(closure$old.v)));
      }
    };
  }
  function getList$lambda(closure$entries, closure$test) {
    return function (it) {
      closure$entries.v = it;
      closure$test();
      return Unit;
    };
  }
  function getList$lambda_0(closure$usernames, closure$test) {
    return function (it) {
      closure$usernames.v = it;
      closure$test();
      return Unit;
    };
  }
  function getList$lambda_1(closure$old, closure$test) {
    return function (it) {
      closure$old.v = it;
      closure$test();
      return Unit;
    };
  }
  function getList(callback) {
    var usernames = {v: null};
    var entries = {v: null};
    var old = {v: null};
    var test = getList$test(usernames, entries, old, callback);
    getEntries(getList$lambda(entries, test));
    getUsernames(getList$lambda_0(usernames, test));
    getOld(getList$lambda_1(old, test));
  }
  function main$lambda(closure$table, closure$showHide) {
    return function (it) {
      if (closure$table.style.display === 'none') {
        closure$table.style.display = '';
        closure$showHide.innerText = ' hide table';
      }
       else {
        closure$table.style.display = 'none';
        closure$showHide.innerText = 'show table';
      }
      return Unit;
    };
  }
  function main$lambda_0(closure$table) {
    return function (it) {
      charts(it);
      var tmp$ = ensureNotNull(document.getElementById('totalHours'));
      var destination = ArrayList_init(collectionSizeOrDefault(it, 10));
      var tmp$_0;
      tmp$_0 = it.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(item.msDuration);
      }
      var tmp$_1;
      var accumulator = 0.0;
      tmp$_1 = destination.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        accumulator = accumulator + element;
      }
      var $receiver = numberToInt(accumulator / 3600000).toString();
      var str = ' Hours total';
      tmp$.textContent = $receiver.concat(str);
      var closure$table_0 = closure$table;
      var tmp$_2;
      var header = closure$table_0.insertRow();
      addClass(appendText(header.insertCell(), 'Username'), ['header']);
      addClass(appendText(header.insertCell(), 'Duration'), ['header']);
      addClass(appendText(header.insertCell(), 'Time logged off'), ['header']);
      tmp$_2 = it.iterator();
      while (tmp$_2.hasNext()) {
        var log = tmp$_2.next();
        var tr = closure$table_0.insertRow();
        appendText(tr.insertCell(), log.username);
        var d = log.msDuration;
        d.toString();
        appendText(tr.insertCell(), (new Duration(d / 1000 | 0)).toString());
        appendText(tr.insertCell(), (new Date(log.time)).toDateString());
      }
      return Unit;
    };
  }
  function main() {
    var tmp$, tmp$_0;
    var showHide = Kotlin.isType(tmp$ = ensureNotNull(document.getElementById('table-toggle')), HTMLButtonElement) ? tmp$ : throwCCE();
    var table = Kotlin.isType(tmp$_0 = document.getElementById('entire-table'), HTMLTableElement) ? tmp$_0 : throwCCE();
    showHide.onclick = main$lambda(table, showHide);
    getList(main$lambda_0(table));
  }
  _.UserPair = UserPair;
  _.charts_7u896l$ = charts;
  $$importsForInline$$.website = _;
  _.yearChart_7u896l$ = yearChart;
  _.averageTimeChart_7u896l$ = averageTimeChart;
  _.timePerDay_7u896l$ = timePerDay;
  _.totalTimeChart_7u896l$ = totalTimeChart;
  _.perDayChart_7u896l$ = perDayChart;
  _.hm_za3lpa$ = hm;
  _.toUserPairs_txrqs2$ = toUserPairs;
  _.use_eoe559$ = use;
  _.dyn_5ij4lk$ = dyn;
  _.Duration = Duration;
  _.LogEntry = LogEntry;
  _.map_6hosri$ = map;
  _.getList_dzsxne$ = getList;
  _.main = main;
  main();
  Kotlin.defineModule('website', _);
  return _;
}(typeof website === 'undefined' ? {} : website, kotlin);

//# sourceMappingURL=website.js.map
