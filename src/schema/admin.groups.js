import Joi from "joi";

export const GROUPS_SCHEMA = Joi.object({
  groupname: Joi.string().required(),
  title: Joi.string().required(),
  select: Joi.string().required(),
}).required();
