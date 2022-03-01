const mongoose = require('mongoose');
const winston = require('winston');
//const config = require('config');

// databasega ulanish
module.exports = function () {
    mongoose.connect('mongodb+srv://Mirzohid:gulshoda@testmaster.l0etp.mongodb.net/test?retryWrites=true&w=majority')
        .then(() => {
            winston.info('Mamgodbga Ulandi');
        })
        .catch((err) => {
            throw new Error(err);
        });

}

