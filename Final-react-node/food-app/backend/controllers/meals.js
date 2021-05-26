import * as mealService from "../service/meals";

export async function createCustomer(req, res, next) {
  const params = req.body;
  try {
    const data = await mealService.createCustomer(params);
    res.json(data);
  } catch (err) {
    next(err);
  }
}
