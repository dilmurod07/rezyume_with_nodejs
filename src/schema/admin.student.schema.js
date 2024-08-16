import Joi from "joi";

export const STUDENT_SCHEMA = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  groupname: Joi.string().required(),
  grouptitle: Joi.string().required(),
}).required();
