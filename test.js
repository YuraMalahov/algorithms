"use strict";

var childProcess = require("child_process");
var http = require("http");
var fs = require("fs");

var file = fs.createWriteStream("./text_file");
var child = childProcess.fork("./server.js", [], {});

childProcess.exec("git apply message.patch", function () {
    child.on("message", function (message) {
        if (message === "OK") {
            childProcess.exec("npm install", function (error, stdout, stderr) {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
                
                var req = http.request({
                    hostname: '127.0.0.1',
                    port: 8000,
                    path: '/',
                    method: 'GET'
                }, function (res) {
                    res.pipe(file);
                    res.on('end', function () {
                        console.log('No more data in response.');
                        childProcess.exec("git reset --hard HEAD", function () {
                            child.kill();
                            process.exit();
                        });
                    });
                });
                req.on('error', (e) => console.log(`problem with request: ${e.message}`));
                req.write('');
                req.end();
            });
        }
    });
});
