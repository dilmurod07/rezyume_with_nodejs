import Joi from "joi";

export const COURSES_SCHEMA = Joi.object({
  title: Joi.string().required(),
  price: Joi.string().required(),
}).required();
