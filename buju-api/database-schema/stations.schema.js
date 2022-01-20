
const knex = require('../knex')

const initalizeStations = () => {
    const tableName = "stations";
    knex.schema.hasTable('stations').then((exists) => {
        if (!exists) {
            knex.schema
                .createTable(tableName, (table) => {
                    table.increments("id");
                    table.string('name');
                    table.string('value');
                })
                .then(async () => {
                    console.log(`Created ${tableName} table`);
                })
                .catch((e) => console.error(`Error creating ${tableName} table`, e));
        }
    });

    return knex;
}

module.exports = initalizeStations;
