var currentdate = new Date();

//Install express server
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');

var app = express();
app.use(favicon(path.join(__dirname, '/src/favicon.ico')));

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, 'dist/material-dashboard-angular')));

app.get("/*", function(req, res) {
    res.sendFile('index.html', {root: '/dist/material-dashboard-angular'}
);
  });

// Returns the date in format DD/MM/YYYY
function getDate() {
    currentdate = new Date();
    var day = "";
    var month = "";
    var year = "";
    var hour = "";
    var minute = "";
    var second = "";
    if (currentdate.getDate() < 10) {
        day = "0" + currentdate.getDate();
    }
    else {
        day = currentdate.getDate();
    }
    if ((currentdate.getMonth() + 1) < 10) {
        month = "0" + (currentdate.getMonth() + 1);
    }
    else {
        month = (currentdate.getMonth() + 1);
    }
    year = currentdate.getFullYear();
    if (currentdate.getHours() < 10) {
        hour = "0" + currentdate.getHours();
    }
    else {
        hour = currentdate.getHours();
    }
    if (currentdate.getMinutes() < 10) {
        minute = "0" + currentdate.getMinutes();
    }
    else {
        minute = currentdate.getMinutes();
    }
    if (currentdate.getSeconds() < 10) {
        second = "0" + currentdate.getSeconds();
    }
    else {
        second = currentdate.getSeconds();
    }
    var date = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
    return date;
};

// Initial Server Start-up Console Notification
app.listen(app.get('8080'), function () {
    var serverStartMessage = "The server is now running on port 8080! Server started at " + getDate() + ".";
    console.log(serverStartMessage);
});
