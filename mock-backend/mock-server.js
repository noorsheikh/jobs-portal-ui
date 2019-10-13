const jsonServer = require('json-server');
const bodyParser = require('body-parser');

module.exports = function startMockServer(port) {
    console.log('Starting JSON Mock Server');

    const server = jsonServer.create();
    server.use(jsonServer.defaults());
    server.use(bodyParser.json());

    const db = require('./db');
    const data = db();
    const router = jsonServer.router(data);

    server.get('/jobs', (req, res) => {
        res.jsonp(JSON.parse(JSON.stringify(data.jobs)));
    });

    server.use(router);
    server.listen(port);
};
