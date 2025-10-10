import http from "http";

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  //   res.write("Assalamu'alaikum");

  //   res.setHeader("Content-Type", "text/html");
  //   res.statusCode = 404;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Assalamu'alaikum</h1>"); // res.end can be used to pass a message
});

server.listen(PORT, () => {
  console.log(`Server running on  port ${PORT}`);
});
