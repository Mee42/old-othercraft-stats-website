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
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var Comparator = Kotlin.kotlin.Comparator;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var abs = Kotlin.kotlin.math.abs_s8cxhz$;
  var toString = Kotlin.toString;
  var iterator = Kotlin.kotlin.js.iterator_s8jyvk$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var throwCCE = Kotlin.throwCCE;
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
  function totalTimeChart$lambda(it) {
    return it.time;
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
    var totalTimeChart = o;
    plotBarChart('totalTimeChart', totalTimeChart);
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
      var closure$table_0 = closure$table;
      var tmp$;
      var header = closure$table_0.insertRow();
      addClass(appendText(header.insertCell(), 'Username'), ['header']);
      addClass(appendText(header.insertCell(), 'Duration'), ['header']);
      addClass(appendText(header.insertCell(), 'Time logged off'), ['header']);
      tmp$ = it.iterator();
      while (tmp$.hasNext()) {
        var log = tmp$.next();
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
  _.totalTimeChart_7u896l$ = totalTimeChart;
  _.toUserPairs_txrqs2$ = toUserPairs;
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
