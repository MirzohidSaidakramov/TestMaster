const mongoose = require('mongoose');
const winston = require('winston');

// databasega ulanish
module.exports = function () {
    mongoose.connect('mongodb://localhost/testGulshodaxon')
        .then(() => {
            winston.info('Mamgodbga Ulandi');
        })
        .catch((err) => {
            throw new Error(err);
        });

}

