export function up(knex){
    return knex.schema.createTable('customer',table =>{
        table.string('name', 30).notNull();
        table.string('email', 200).notNull();
    });
}
export function down(knex){
    return knex.schema.dropTable('customer');
}