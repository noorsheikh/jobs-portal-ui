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
        res.jsonp(data.jobs);
    });

    server.post('/jobs/search/:what/:where', (req, res) => {
        const what = req.params.what;
        const where = req.params.where;
        res.jsonp(data.jobs.filter(job => job.title == what || job.location == where));
    });

    server.use(router);
    server.listen(port);
};
