const express = require('express');
const { config } = require('winston');
const winston = require('winston');
//const config = require('config');
const cors = require('cors');
const getDataFromDb = require('./common/getDataFromDB');
const helmet = require('helmet');
const compression = require('compression');
const app = express();

// db muhit o'zgaruvchisini tekshirish




// mongoDbga ulanishni hosil qilish
require('./common/db')();

// winstonni sozlash
winston.add(new winston.transports.Console());
winston.add(new winston.transports.File({
    filename: 'logs/test-logs.log',
    level: 'error'
}));
winston.exceptions.handle(new winston.transports.File({
    filename: 'logs/test-logs.log',
    level: 'error'
}));
//cors dan foydalanish

app.use(cors());
app.use(express.json())
app.use(helmet());
app.use(compression());

// routerlani aniqlash
app.get('/parts', async (req, res) => {
    res.send(await getDataFromDb.getPart());
    winston.info(getDataFromDb.getPart());

});

app.get('/part', async (req, res) => {

    res.send(await getDataFromDb.getTestsByPart());

});

app.get('/question/:testId', async (req, res) => {
    res.send(await getDataFromDb.getQues(req.params.testId));
});

app.get('/answer/:questionId', async (req, res) => {
    res.send(await getDataFromDb.getAnsw(req.params.questionId));
});





// portni aniqlash
port  = process.env.PORT || 8080;
app.listen(port, () => {
    winston.info(port + ' ni eshityapman')
})