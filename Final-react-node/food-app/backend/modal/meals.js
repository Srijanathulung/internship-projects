import connection from '../db';
import snakeize from 'snakeize';
import camelize from 'camelize';

const table = 'customer'
export async function create(params){
    params = snakeize(params)
    //console.log('***params = ',params)
    const [data] = await connection.insert(params).into(table).returning('*');
    return camelize(data);
}