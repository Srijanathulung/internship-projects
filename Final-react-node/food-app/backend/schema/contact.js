import Joi from "joi";

const CREATE_CUSTOMER_SCHEMA = Joi.object().keys({
  name: Joi.string().max(20).required(),
  email: Joi.string().max(100).required(),
});

export function validateCustomerCreation(req, res, next) {
  try {
    Joi.assert(req.body, CREATE_CUSTOMER_SCHEMA);
    next();
  } catch (err) {
    next(err);
  }
}
