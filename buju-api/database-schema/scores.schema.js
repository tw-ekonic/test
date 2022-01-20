
const knex = require('../knex')

const initializeScores = () => {
    const tableName = "scores";
    knex.schema.hasTable('scores').then((exists) => {
        if (!exists) {
            knex.schema
                .createTable(tableName, (table) => {
                    table.increments("id");
                    table.integer('user_id').unsigned();
                    table.foreign('user_id').references('users.id');
                    table.integer('station_id').unsigned();
                    table.foreign('station_id').references('stations.id');
                    table.string('score');
                })
                .then(async () => {
                    console.log(`Created ${tableName} table`);
                })
                .catch((e) => console.error(`Error creating ${tableName} table`, e));
        }
    });

    return knex;
}

module.exports = initializeScores;
