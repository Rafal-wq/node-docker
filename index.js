const { createServer } = require('node:http');
const server = createServer();

server.on('request', (req, res) => {
    if (req.url === '/') {
        res.end(`Docker and Node works fine. Server is running on http://0.0.0.0:3000`)
    }
});

server.listen(3000, '0.0.0.0', () => {
    console.log('Server is running on http://0.0.0.0:3000')
});