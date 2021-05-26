import * as customer from "../modal/meals";

export async function createCustomer(params) {
  const { name, email } = params;
  const data = await customer.create({
    name,
    email,
  });
  return {
    data: params,
    message: " New user added sucesfully",
  };
}
