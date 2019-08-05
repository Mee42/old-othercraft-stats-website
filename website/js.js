

function plotBarChart(dom,chart) {
    console.log(chart);
    Highcharts.chart(dom,chart)
}

function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return weekNo
}

function getUsernames(callback) {
    var client = new XMLHttpRequest();
    client.open('GET', 'res/whitelist.json');
    client.onload = function() { callback(client.responseText); };
    client.send();
}

function getEntries(callback) {
    var client = new XMLHttpRequest();
    client.open('GET', 'res/entries.json');
    client.onload = function() { callback(client.responseText);};
    client.send();
}

function getOld(callback) {
    var client = new XMLHttpRequest();
    client.open('GET', 'res/old.json');
    client.onload = function() { callback(client.responseText);};
    client.send();
}
