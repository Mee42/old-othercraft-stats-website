

function plotBarChart(dom,chart) {
    console.log(chart);
    Highcharts.chart(dom,chart)
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

