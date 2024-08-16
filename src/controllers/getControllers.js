import { ReadFileCustom } from "../helpers/Auth.Sign.helpers.js";

export const GetControllers = (req, res) => {
  const users = ReadFileCustom("users.json");
  res.render("index", { user: users });
};
