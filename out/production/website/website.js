if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'website'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'website'.");
}
var website = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var equals = Kotlin.equals;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var average = Kotlin.kotlin.collections.average_dmxgdv$;
  var numberToInt = Kotlin.numberToInt;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var Comparator = Kotlin.kotlin.Comparator;
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
  function chart1$UserPair(name, time) {
    this.name = name;
    this.time = time;
  }
  chart1$UserPair.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserPair',
    interfaces: []
  };
  function chart1$lambda(it) {
    return it.time;
  }
  function chart1(list) {
    var tmp$;
    var set = HashSet_init();
    var list_0 = ArrayList_init();
    tmp$ = list.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      var key = e.username;
      if (set.add_11rb$(key))
        list_0.add_11rb$(e);
    }
    var destination = ArrayList_init_0(collectionSizeOrDefault(list_0, 10));
    var tmp$_0;
    tmp$_0 = list_0.iterator();
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
      tmp$_3 = list.iterator();
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
      tmp$_2.call(destination_0, new chart1$UserPair(item_0, sum / 60000 | 0));
    }
    var users = sortedWith(destination_0, new Comparator$ObjectLiteral(compareByDescending$lambda(chart1$lambda)));
    var o = {};
    var o_0 = {};
    o_0.type = 'bar';
    o.chart = o_0;
    var o_1 = {};
    o_1.text = 'Total Time';
    o.title = o_1;
    var o_2 = {};
    var o_3 = {};
    o_3.opposite = true;
    o.yAxis = [o_2, o_3];
    var o_4 = {};
    var destination_2 = ArrayList_init_0(collectionSizeOrDefault(users, 10));
    var tmp$_5;
    tmp$_5 = users.iterator();
    while (tmp$_5.hasNext()) {
      var item_1 = tmp$_5.next();
      destination_2.add_11rb$(item_1.name);
    }
    o_4.categories = copyToArray(destination_2);
    o.xAxis = o_4;
    var o_5 = {};
    o_5.name = 'Total Minute, All Time';
    var destination_3 = ArrayList_init_0(collectionSizeOrDefault(users, 10));
    var tmp$_6;
    tmp$_6 = users.iterator();
    while (tmp$_6.hasNext()) {
      var item_2 = tmp$_6.next();
      destination_3.add_11rb$(item_2.time);
    }
    o_5.data = copyToArray(destination_3);
    o_5.yAxis = 0;
    var o_6 = {};
    o_6.name = 'Average Minutes, Per Session';
    o_6.yAxis = 0;
    var destination_4 = ArrayList_init_0(collectionSizeOrDefault(users, 10));
    var tmp$_7;
    tmp$_7 = users.iterator();
    while (tmp$_7.hasNext()) {
      var item_3 = tmp$_7.next();
      var tmp$_8 = destination_4.add_11rb$;
      var destination_5 = ArrayList_init();
      var tmp$_9;
      tmp$_9 = list.iterator();
      while (tmp$_9.hasNext()) {
        var element_1 = tmp$_9.next();
        if (equals(element_1.username, item_3.name))
          destination_5.add_11rb$(element_1);
      }
      var destination_6 = ArrayList_init_0(collectionSizeOrDefault(destination_5, 10));
      var tmp$_10;
      tmp$_10 = destination_5.iterator();
      while (tmp$_10.hasNext()) {
        var item_4 = tmp$_10.next();
        destination_6.add_11rb$(item_4.msDuration);
      }
      tmp$_8.call(destination_4, numberToInt(average(destination_6) / 60000));
    }
    o_6.data = copyToArray(destination_4);
    o.series = [o_5, o_6];
    var totalTimeChart = o;
    plotBarChart('timeChart', totalTimeChart);
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
      chart1(it);
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
  $$importsForInline$$.website = _;
  _.chart1_7u896l$ = chart1;
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
