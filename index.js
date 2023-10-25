var http = require("http");
var fs = require("fs/promises");

http
  .createServer(async (req, res) => {
    let data = await readWriteFile(req?.url);
    if (data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
    }
    res.end();
  })
  .listen(8080);

const readWriteFile = async (pathName) => {
  try {
    let fileName = "404.html";
    if (pathName === "/about") {
      fileName = "about.html";
    } else if (pathName === "/contact-me") {
      fileName = "contact-me.html";
    } else if (pathName === "/") {
      fileName = "index.html";
    }
    const data = await fs.readFile(fileName);
    return data;
  } catch (error) {
    return null;
  }
};
