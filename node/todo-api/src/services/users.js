import usersJson from "../data/users";
import logger from "../utils/logger";
import * as User from "../models/User";
import * as UserPhoneNumber from "../models/UserPhoneNumber";

export async function getAllUsers() {
  logger.info("fetching all users");
  const users = await User.getAll();

  const data = users.map(user => {
    const { phoneNumbers } = user;
    const hasEmptyPhoneNumber = Object.keys(phoneNumbers[0]).length === 0;

    return {
      ...user,
      phoneNumbers: hasEmptyPhoneNumber ? [] : phoneNumbers
    };
  })
  return {
    data,
    message: "List of all users",
  };
}
/**
 * Get user by id
 * @param  userId 
 */
export async function getUserById(userId) {

  const result = await verifyUserExistence(userId);

  const phoneNumbers = await UserPhoneNumber.getPhoneNumbersByUserId(userId);

  return {
    data: {
      ...result,
      phoneNumbers
    },
    message: `Information about userId ${userId}`,
  };
}

/**
 * Create a user
 * @param params 
 */
export async function createUser(params) {

  const { firstName, lastName, email, password, phoneNumbers } = params;

  const userInsertData = await User.createUser(
    {
      firstName, lastName, email, password
    }
  );

  const insertDataForPhoneNumbers = phoneNumbers.map(phone => ({
    userId: userInsertData.id,
    phoneNumber: phone.number,
    type:phone.type
  }))

  const phoneNumberInsertedData = await UserPhoneNumber.add(insertDataForPhoneNumbers);
  
  return {
    data:params,
    message: "New user added successfully"
  };
}
/**
 * Delete a user
 * @param userId 
 */
export async function deleteUser(userId) {

  await verifyUserExistence(userId);

  await user.remove(userId);

  return {
    message: "Deleted user with id " + userId,
  };
}
/**
 * Update a user.
 *
 * @param  userId
 * @param  params
 */
export async function updateUser(userId, params) {

  await verifyUserExistence(userId); 
  await User.update(userId,params)
  
  return {
    data: {
      ...result,
      ...params,
    },
    message: "Updated user with id " + userId,
  };
}
async function verifyUserExistence(UserId) {
  logger.info(`Fetching user information with id ${userId}`);
  const result = await User.getUserById(userId)

  if (!result) {

    logger.error(`cannot find the user with id ${userId}`);

    throw new NotFoundError(`cannot find the user with id ${userId}`);
  }
  return result;
}