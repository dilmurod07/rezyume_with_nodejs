import Joi from "joi";

export const TEACHER_SCHEMA2 = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).required();
