
const knex = require('../knex')

const initializeUsers = () => {
    const tableName = "users";
    knex.schema.hasTable('users').then((exists) => {
        if (!exists) {
            knex.schema
                .createTable(tableName, (table) => {
                    table.increments("id");
                    table.string('name');
                })
                .then(async () => {
                    console.log(`Created ${tableName} table`);
                })
                .catch((e) => console.error(`Error creating ${tableName} table`, e));
        }
    });

    return knex;
}

module.exports = initializeUsers;
