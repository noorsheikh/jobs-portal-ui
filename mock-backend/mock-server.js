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

    server.get('/jobs/:id', (req, res) => {
        res.jsonp(data.jobs.filter(job => job.id == req.params.id)[0]);
    })

    server.post('/jobs/search', (req, res) => {
        const what = new RegExp(req.query.what, 'gi');
        const where = new RegExp(req.query.where, 'gi');
        let response = [];

        if (what !== 'undefined' && where !== 'undefined') {
            response = data.jobs.filter(job => job.title.match(what) && (job.location.match(where) || job.company.match(where)));
        }

        if (what !== 'undefined' && where === 'undefined') {
            response = data.jobs.filter(job => job.title.match(what));
        }

        if (response.length <= 0) {
            res.json({ message: 'No Jobs Found'});
        }

        res.json(response);
    });

    server.use(router);
    server.listen(port);
};
