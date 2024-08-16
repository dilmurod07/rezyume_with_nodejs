import Joi from "joi";
export const ADMIN_SCHEMA = Joi.object({
  username: Joi.string().max(20).trim().required(),
  password: Joi.string().max(20).trim().required(),
  select: Joi.string().required(),
}).required();
