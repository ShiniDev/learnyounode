"use strict";

const http = require("http");
const { URL } = require("url");
const PORT = process.argv[2];
const globalDate = {};
const server = http.createServer((req, res) => {
  const METHOD = req.method;
  if (METHOD == "GET") {
    const url = new URL(`http://${req.headers.host}${req.url}`);
    res.writeHead(200, { "Content-type": "application/json" });
    if (url.pathname == "/api/parsetime") {
      const passedDate = url.searchParams.get("iso");
      let processedDate = new Date(passedDate);
      globalDate.date = processedDate;
      res.end(
        JSON.stringify({
          hour: processedDate.getHours(),
          minute: processedDate.getMinutes(),
          second: processedDate.getSeconds(),
        })
      );
    } else if (url.pathname == "/api/unixtime") {
      res.end(
        JSON.stringify({
          unixtime:
            globalDate.date !== undefined
              ? globalDate.date.getTime()
              : new Date().getTime(),
        })
      );
    } else {
      res.end();
    }
  } else {
    res.end();
  }
});
server.listen(PORT);
