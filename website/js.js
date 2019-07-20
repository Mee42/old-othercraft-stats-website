

function getUsernames(callback) {
    var called = false;
    var client = new XMLHttpRequest();
    client.open('GET', 'res/whitelist.json');
    client.onreadystatechange = function() {
        if (called === false){
            if (client.responseText === ''){
                return
            }
            called = true;
            callback(client.responseText);
        }
    };
    client.send();
}

function getEntries(callback) {
    var called = false;
    var client = new XMLHttpRequest();
    client.open('GET', 'res/entries.json');
    client.onreadystatechange = function() {
        if (called === false){
            if (client.responseText === ''){
                return
            }
            called = true;
            callback(client.responseText);
        }
    };
    client.send();
}

