// List following and followers from several accounts

"use strict";

function follow(user, callback) {
    var page = require('webpage').create(),
        url = "file:///Users/francoislaberge/dev/diagrams/src/flowchart/index.html";

    console.log(url);

    page.open(url, function (status) {
        if (status === 'fail') {
            console.log(user + ': ?');
        } else {
        }
        page.close();
        callback.apply();
    });
}

function process() {
    if (users.length > 0) {
        var user = users[0];
        users.splice(0, 1);
        follow(user, process);
    } else {
        phantom.exit();
    }
}

process();
