const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Amazon Linux ARM Node.js app deployed via Jenkins & PM2 -123 added!\n');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
