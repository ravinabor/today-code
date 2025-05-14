const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello ravnaa mankar borkar nagpur updated email alerts 14th may 2025!\n');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
