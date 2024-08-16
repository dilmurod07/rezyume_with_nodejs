import Joi from "joi";

export const AUTH_SCHEMA = Joi.object({
  username: Joi.string().max(20).trim(),
  password: Joi.string().max(20).trim(),
}).required();
