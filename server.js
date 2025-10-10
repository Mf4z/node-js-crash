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
  // Route only GET
  try {
    // Check if GET request
    if (req.method === "GET") {
      // Create a router

      let filePath; // file path for pages

      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
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
