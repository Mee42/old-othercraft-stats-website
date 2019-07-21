if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'website'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'website'.");
}
var website = function (_, Kotlin) {
  'use strict';
  var abs = Kotlin.kotlin.math.abs_s8cxhz$;
  var toString = Kotlin.toString;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var iterator = Kotlin.kotlin.js.iterator_s8jyvk$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var throwCCE = Kotlin.throwCCE;
  var appendText = Kotlin.kotlin.dom.appendText_46n0ku$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
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
        closure$showHide.innerText = 'hide table';
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
      var tmp$;
      var header = closure$table.insertRow();
      addClass(appendText(header.insertCell(), 'Username'), ['header']);
      addClass(appendText(header.insertCell(), 'Duration'), ['header']);
      addClass(appendText(header.insertCell(), 'Time logged off'), ['header']);
      tmp$ = it.iterator();
      while (tmp$.hasNext()) {
        var log = tmp$.next();
        var tr = closure$table.insertRow();
        appendText(tr.insertCell(), log.username);
        var d = log.msDuration;
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
