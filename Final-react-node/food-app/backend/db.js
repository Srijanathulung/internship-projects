import knex from 'knex';
import dbConfig from './knex';

const connection  = knex(dbConfig);
export default connection;