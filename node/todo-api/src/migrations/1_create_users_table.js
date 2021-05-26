export  function up(knex) {
    //create table
    return knex.schema.createTable("users", (table) => {
      table.increments("id");
      table.string("first_name", 30).notNull();
      table.string("last_name", 30).notNull();
      table.string("email", 100).notNull();
      table.string("password", 200).notNull();
      table.boolean("is_active").notNull().defaultTo(true);
      table.timestamp("created_at").defaultTo(knex.raw("now()"));
    });
  }
  
  export  function down(knex) {
    //remove created table 
    return knex.schema.dropTable("users");
  }