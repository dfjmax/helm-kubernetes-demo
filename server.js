const http = require('http');
const port = 8080;

const requestHandler = (req, res) => {
    res.end('Hello, Kubernetes with Helm!');
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});