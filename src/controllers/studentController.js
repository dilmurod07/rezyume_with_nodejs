import { ReadFileCustom } from "../helpers/Auth.Sign.helpers.js";

export const studentGetController = (req, res) => {
  const { id, username, password } = req.body;

  const users = ReadFileCustom("users.json").find(
    (e) => (e.username == username) & (e.password == password) & (e.id == id)
  );
  const hw = ReadFileCustom("homework.json").filter(
    (e) => e.groupname == users.groupname
  );

  res.render("student", { user: users, hw: hw });
};
