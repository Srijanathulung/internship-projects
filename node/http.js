const http = require("http");
http
  .createServer((request, response) => {
    response.write("this first practice");
    response.end();
  })
  .listen(1234);
console.log("Server running at local");
