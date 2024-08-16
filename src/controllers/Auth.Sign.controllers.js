import jwt from "jsonwebtoken";
import {
  ReadFileCustom,
  writeFileCustom,
} from "../helpers/Auth.Sign.helpers.js";

export const GetControllers = (req, res) => {
  res.render("index");
};

export const PostControllers = (req, res) => {
  const { username, password } = req.body;

  const users = ReadFileCustom("users.json").find(
    (e) => (e.username == username) & (e.password == password)
  );

  if (users.role == "admin") {
    res.redirect("/api/admin");
  }
  if (users.role == "teacher") {
    res.cookie(
      "token",
      jwt.sign(
        {
          id: users.id,
          username: users.username,
          password: users.password,
        },
        "123456789"
      )
    );
    res.redirect("/api/teacher");
  }
  if (users.role == "student") {
    res.cookie(
      "token",
      jwt.sign(
        {
          id: users.id,
          username: users.username,
          password: users.password,
        },
        "123456789"
      )
    );
    res.redirect("/api/student");
  }
};
