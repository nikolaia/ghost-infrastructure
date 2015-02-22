var path = require('path'),
    config;

config = {

    production: {
        url: "http://"+process.env['VIRTUAL_HOST'],
        mail: {},
        database: {
            client: 'mysql',
            connection: {
                host: process.env['DB_PORT_3306_TCP_ADDR'],
                user: process.env['DB_ENV_MYSQL_USER'],
                password: process.env['DB_ENV_MYSQL_PASSWORD'],
                database: process.env['DB_ENV_MYSQL_DATABASE'],
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
