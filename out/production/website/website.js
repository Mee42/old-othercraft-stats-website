if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'website'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'website'.");
}
var website = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var equals = Kotlin.equals;
  var average = Kotlin.kotlin.collections.average_dmxgdv$;
  var numberToInt = Kotlin.numberToInt;
  var throwCCE = Kotlin.throwCCE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var sum = Kotlin.kotlin.collections.sum_plj8ka$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var Comparator = Kotlin.kotlin.Comparator;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var abs = Kotlin.kotlin.math.abs_s8cxhz$;
  var toString = Kotlin.toString;
  var iterator = Kotlin.kotlin.js.iterator_s8jyvk$;
  var Unit = Kotlin.kotlin.Unit;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var L0 = Kotlin.Long.ZERO;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var appendText = Kotlin.kotlin.dom.appendText_46n0ku$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
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
  function charts(list) {
    averageTimeChart(list);
    totalTimeChart(list);
    timePerDay(list);
  }
  function averageTimeChart$lambda(closure$list) {
    return function (it) {
      var $receiver = closure$list;
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (equals(element.username, it.name))
          destination.add_11rb$(element);
      }
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
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
    var destination = ArrayList_init_0(collectionSizeOrDefault(users, 10));
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
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(users, 10));
    var tmp$_0;
    tmp$_0 = users.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      var tmp$_1 = destination_0.add_11rb$;
      var destination_1 = ArrayList_init();
      var tmp$_2;
      tmp$_2 = list.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        if (equals(element.username, item_0.name))
          destination_1.add_11rb$(element);
      }
      var destination_2 = ArrayList_init_0(collectionSizeOrDefault(destination_1, 10));
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
    return '<b>' + username.toString() + '<\/b>:' + hm(y);
  }
  function timePerDay(list) {
    var dayNameForInt = timePerDay$dayNameForInt;
    var destination = ArrayList_init_0(collectionSizeOrDefault(list, 10));
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
    var list_0 = ArrayList_init();
    tmp$_2 = userLists.iterator();
    while (tmp$_2.hasNext()) {
      var e = tmp$_2.next();
      var key = e.username;
      if (set.add_11rb$(key))
        list_0.add_11rb$(e);
    }
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(list_0, 10));
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
    var numberOfWeeks = between(tmp$_4, ensureNotNull(maxBy$result).time);
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
    var destination_1 = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_5;
    tmp$_5 = $receiver.iterator();
    while (tmp$_5.hasNext()) {
      var item_1 = tmp$_5.next();
      destination_1.add_11rb$(dayNameForInt(item_1));
    }
    o_3.categories = copyToArray(destination_1);
    o.xAxis = o_3;
    var destination_2 = ArrayList_init_0(collectionSizeOrDefault(usernames, 10));
    var tmp$_6;
    tmp$_6 = usernames.iterator();
    while (tmp$_6.hasNext()) {
      var item_2 = tmp$_6.next();
      var tmp$_7 = destination_2.add_11rb$;
      var o_4 = {};
      o_4.name = item_2;
      var $receiver_0 = until(0, 7);
      var destination_3 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_8;
      tmp$_8 = $receiver_0.iterator();
      while (tmp$_8.hasNext()) {
        var item_3 = tmp$_8.next();
        var tmp$_9 = destination_3.add_11rb$;
        var destination_4 = ArrayList_init();
        var tmp$_10;
        tmp$_10 = userLists.iterator();
        while (tmp$_10.hasNext()) {
          var element = tmp$_10.next();
          if (element.day === item_3 && equals(element.username, item_2))
            destination_4.add_11rb$(element);
        }
        var destination_5 = ArrayList_init_0(collectionSizeOrDefault(destination_4, 10));
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
    return '<br>' + username + '<\/br>:' + hm(min);
  }
  function totalTimeChart(list) {
    var users = sortedWith(toUserPairs(list), new Comparator$ObjectLiteral(compareByDescending$lambda(totalTimeChart$lambda)));
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
    var destination = ArrayList_init_0(collectionSizeOrDefault(users, 10));
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
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(users, 10));
    var tmp$_0;
    tmp$_0 = users.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      destination_0.add_11rb$(item_0.time);
    }
    o_4.data = copyToArray(destination_0);
    o_4.yAxis = 0;
    o.series = [o_4];
    var o_5 = {};
    o_5.formatter = totalTimeChart$lambda$lambda$lambda;
    o.tooltip = o_5;
    var totalTimeChart = o;
    plotBarChart('totalTimeChart', totalTimeChart);
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
    var list = ArrayList_init();
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      var key = e.username;
      if (set.add_11rb$(key))
        list.add_11rb$(e);
    }
    var destination = ArrayList_init_0(collectionSizeOrDefault(list, 10));
    var tmp$_0;
    tmp$_0 = list.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.username);
    }
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      var tmp$_2 = destination_0.add_11rb$;
      var destination_1 = ArrayList_init();
      var tmp$_3;
      tmp$_3 = $receiver.iterator();
      while (tmp$_3.hasNext()) {
        var element = tmp$_3.next();
        if (equals(element.username, item_0))
          destination_1.add_11rb$(element);
      }
      var tmp$_4;
      var sum = 0;
      tmp$_4 = destination_1.iterator();
      while (tmp$_4.hasNext()) {
        var element_0 = tmp$_4.next();
        sum = sum + toInt(element_0.msDuration.toString()) | 0;
      }
      tmp$_2.call(destination_0, new UserPair(item_0, sum / 60000 | 0));
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
    this.seconds_0 = seconds;
  }
  Duration.prototype.toString = function () {
    var seconds = this.seconds_0;
    var absSeconds = abs(seconds);
    var positive = '' + toString(absSeconds.div(Kotlin.Long.fromInt(3600))) + 'h ' + toString(absSeconds.modulo(Kotlin.Long.fromInt(3600)).div(Kotlin.Long.fromInt(60))) + 'm ' + toString(absSeconds.modulo(Kotlin.Long.fromInt(60))) + 's';
    return seconds.toNumber() < 0 ? '-' + positive : positive;
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
  LogEntry.prototype.copy_cd0evc$ = function (username, time, msDuration) {
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
  function map(usernamesJ, entriesJ) {
    var tmp$;
    var usernames = JSON.parse(usernamesJ);
    var getUsernameForUUID = map$getUsernameForUUID(usernames);
    var entries = JSON.parse(entriesJ);
    var list = ArrayList_init();
    tmp$ = iterator(entries);
    while (tmp$.hasNext()) {
      var entry = tmp$.next();
      var timeLogged = entry.timeLogged;
      var millis = entry.millis;
      var uuid = entry.uuid;
      var element = new LogEntry(getUsernameForUUID(uuid), timeLogged, millis);
      list.add_11rb$(element);
    }
    return list;
  }
  function getList$test(closure$usernames, closure$entries, closure$callback) {
    return function () {
      if (closure$usernames.v != null && closure$entries.v != null) {
        closure$callback(map(ensureNotNull(closure$usernames.v), ensureNotNull(closure$entries.v)));
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
  function getList(callback) {
    var usernames = {v: null};
    var entries = {v: null};
    var test = getList$test(usernames, entries, callback);
    getEntries(getList$lambda(entries, test));
    getUsernames(getList$lambda_0(usernames, test));
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
      var destination = ArrayList_init_0(collectionSizeOrDefault(it, 10));
      var tmp$_0;
      tmp$_0 = it.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(item.msDuration);
      }
      var tmp$_1;
      var accumulator = L0;
      tmp$_1 = destination.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        accumulator = toLong((accumulator + element).toString());
      }
      var $receiver = ((toInt(accumulator.toString()) / 60000 | 0) / 60 * 100).toString();
      var $receiver_0 = (toInt(Regex_init('\\..*').replace_x2uqeu$($receiver, '')) / 100 | 0).toString();
      var str = ' Hours total';
      tmp$.textContent = $receiver_0.concat(str);
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
        appendText(tr.insertCell(), (new Duration(Kotlin.Long.fromNumber(toDouble((d / 1000).toString())))).toString());
        appendText(tr.insertCell(), (new Date(log.time)).toDateString());
      }
      return Unit;
    };
  }
  function main() {
    var tmp$, tmp$_0;
    println("u shouldn't be here.\ngood for you.");
    var showHide = Kotlin.isType(tmp$ = ensureNotNull(document.getElementById('table-toggle')), HTMLButtonElement) ? tmp$ : throwCCE();
    var table = Kotlin.isType(tmp$_0 = document.getElementById('entire-table'), HTMLTableElement) ? tmp$_0 : throwCCE();
    showHide.onclick = main$lambda(table, showHide);
    getList(main$lambda_0(table));
  }
  _.UserPair = UserPair;
  _.charts_7u896l$ = charts;
  $$importsForInline$$.website = _;
  _.averageTimeChart_7u896l$ = averageTimeChart;
  _.timePerDay_7u896l$ = timePerDay;
  _.totalTimeChart_7u896l$ = totalTimeChart;
  _.hm_za3lpa$ = hm;
  _.toUserPairs_txrqs2$ = toUserPairs;
  _.use_eoe559$ = use;
  _.dyn_5ij4lk$ = dyn;
  _.Duration = Duration;
  _.LogEntry = LogEntry;
  _.map_puj7f4$ = map;
  _.getList_dzsxne$ = getList;
  _.main = main;
  main();
  Kotlin.defineModule('website', _);
  return _;
}(typeof website === 'undefined' ? {} : website, kotlin);

//# sourceMappingURL=website.js.map
