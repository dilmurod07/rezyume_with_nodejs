import jwt from "jsonwebtoken";

export const VerifyToken = (req, res, next) => {
  const { token } = req.cookies;

  const { id, username, password } = jwt.verify(token, "123456789");
  req.body.id = id;
  req.body.username = username;
  req.body.password = password;
  next();
};
