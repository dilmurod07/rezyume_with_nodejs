import {
  ReadFileCustom,
  writeFileCustom,
} from "../helpers/Auth.Sign.helpers.js";

export const teacherGetConroller = (req, res) => {
  res.render("teacher");
};

export const teacherGroupsGet = (req, res) => {
  const { id, username, password } = req.body;
  const users = ReadFileCustom("users.json").find(
    (e) => (e.id == id) & (e.username == username) & (e.password == password)
  );

  const group = users.groupname;

  res.render("teacherGroups", { teacherGroups: group });
};

export const teacherPostConroller = (req, res) => {
  const { homeworkText, Date, groupname } = req.body;
  const hw = ReadFileCustom("homework.json");
  hw.push({
    id: hw.at(-1)?.id + 1 || 1,
    homeworkText,
    Date,
    groupname,
  });
  writeFileCustom("homework.json", hw);
  res.redirect("/api/teacher-groups");
};
