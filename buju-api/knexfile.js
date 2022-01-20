// Update with your config settings.

module.exports = {

    development: {
        client: 'mysql',
        connection: {
            user:     'root',
            password: 'example',
            database: 'buju',
            host: 'db',
        }
    },

    staging: {
        client: 'mysql',
        connection: {
            user:     'root',
            password: 'Schweber1998!',
            database: 'canteen',
            host: 'localhost',
        }
    },

    production: {
        client: 'mysql',
        connection: {
            user:     'root',
            password: 'example',
            database: 'buju',
            host: 'localhost',
        }
    }

};
