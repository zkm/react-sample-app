var https = require("https");
var express = require("express");
var path = require("path");
var { logSection, logDone, logInfo, colors } = require("./cli-utils");

var app = express();
var port = 3000;
var public_path = path.join(__dirname, "public");

var logRequest = function (request) {
  var method = request.method;
  var url = request.url;
  
  // Skip favicon requests in logs
  if (url === "/favicon.ico") return;
  
  var statusColor = method === "GET" ? colors.green : colors.cyan;
  console.log(`${statusColor}${method}${colors.reset} ${colors.gray}${url}${colors.reset}`);
};

app.set("port", port);

app.use("/", express.static(public_path));

app.use(function requestLogger(request, response, next) {
  logRequest(request);
  next();
});

// Express 5 uses path-to-regexp v8; use a regex catch-all instead of "*" or "/*".
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(public_path, "index.html"));
});

app.listen(app.get("port"), function () {
  logSection("React Dev Server");
  logDone(`Server running on http://localhost:${app.get("port")}`);
  logInfo("Press Ctrl+C to stop");
  console.log("");
});
