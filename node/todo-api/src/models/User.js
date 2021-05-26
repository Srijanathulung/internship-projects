import connection from "../db";
import snakeize from "snakeize";
import camelize from "camelize";
import { FETCH_USERS_WITH_PHONENUMBERS} from '../db/queries/user';

const table = "users";

export async function getAll() {
  const {rows} = await connection.raw(FETCH_USERS_WITH_PHONENUMBERS); 
    
  return camelize(rows);
}

export async function getUserById(id) {
  const [result] = await connection.select("*").from(table).where({ id }).where('is_Active',true);
  return result ? camelize(result) : null;
}

export async function createUser(params) {
  const [data] = await connection
    .insert(snakeize(params))
    .into(table)
    .returning("*");

  return camelize(data);
}

export async function remove(userId) {
  return await connection(table).update({ 'is_active': false }).where({id:userId});
}

export function update(userId, params) {
  return connection(table).update(snakeize(params)).where({ id: userId });
}