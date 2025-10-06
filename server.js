import http from "http";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 8080;

const server = http.createServer(async (req, res) => {
  let filePath = path.join(__dirname, "src", "index.html"); //src/index.html
  try {
    const data = await readFile(filePath, "utf8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  } catch (err) {
    res.writeHead(500);
    res.end("Error loading file");
  }
});

server.listen(PORT, () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
});

export default server;
