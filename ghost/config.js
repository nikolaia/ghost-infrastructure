var path = require('path'),
    config;

config = {

    production: {
        url: process.env['HOSTING_URI'],
        mail: {},
        database: {
            client: 'mysql',
            connection: {
                host: process.env['MYSQL_PORT'],
                user: process.env['MYSQL_ENV_MYSQL_USER'],
                password: process.env['MYSQL_ENV_MYSQL_PASSWORD'],
                database: process.env['MYSQL_ENV_MYSQL_DATABASE'],
                charset: 'utf8'
            },
             debug: true
         },

    server: {
            host: '0.0.0.0',
            port: '2368'
        }
    },
};

module.exports = config;
