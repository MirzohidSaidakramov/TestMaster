const express = require('express');
const winston = require('winston');

const app = express();
const getDataFromDb = require('./common/getDataFromDB');

require('./common/db')();

winston.add(new winston.transports.Console());
winston.add(new winston.transports.File({
    filename: 'logs/test-logs.log',
    level: 'error'
}));
winston.exceptions.handle(new winston.transports.File({
    filename: 'logs/test-logs.log',
    level: 'error'
}));

app.get('/parts', async (req, res) => {
    res.send(await getDataFromDb.getPart());
    winston.info(getDataFromDb.getPart());

});

app.get('/part', async (req, res) => {

    res.send(await getDataFromDb.getTestsByPart(req.body.part));

});

app.get('/question', async (req, res) => {
    res.send(await getDataFromDb.getQues());
});

app.get('/question/:questionId', async (req, res) => {
    res.send(await getDataFromDb.getAnsw(req.params.questionId));
});



port = 8080;
app.listen(port, () => {
    winston.info(port + ' ni eshityapman')
})