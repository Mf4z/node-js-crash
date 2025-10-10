import http from "http";
import fs from "fs/promises"; // Using the promise version
import url from "url";
import path from "path";

// Get current path in __filename, __dirname (using common js - the ones that use Require)

//
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log(__filename); // Check filename
// console.log(__dirname); // Check dirname

const server = http.createServer(async (req, res) => {
  //   res.write("Assalamu'alaikum");

  //   res.setHeader("Content-Type", "text/html");
  //   res.statusCode = 404;
  // console.log(req.url);
  // console.log(req.method);

  // Route only GET
  try {
    // Check if GET request
    if (req.method === "GET") {
      // Create a router

      let filePath; // file path for pages

      if (req.url === "/") {
        // res.writeHead(200, { "Content-Type": "text/html" });
        // res.end("<h1>Home Page - Assalamu'alaikum</h1>"); // res.end can be used to pass a message
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        // res.writeHead(200, { "Content-Type": "text/html" });
        // res.end("<h1>About Page - Assalamu'alaikum Warahmatullah</h1>"); // res.end can be used to pass a message
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        // res.writeHead(404, { "Content-Type": "text/html" });
        // res.end("<h1>Page Not Found</h1>"); // res.end can be used to pass a message
        throw new Error("Not found");
      }

      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(505, { "Content-Type": "text/plain" });
    res.end("Server Error"); // res.end can be used to pass a message
  }
});

server.listen(PORT, () => {
  console.log(`Server running on  port ${PORT}`);
});
