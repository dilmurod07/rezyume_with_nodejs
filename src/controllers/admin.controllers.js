import {
  ReadFileCustom,
  writeFileCustom,
} from "../helpers/Auth.Sign.helpers.js";

export const adminGetController = (req, res) => {
  const users = ReadFileCustom("users.json");
  const group = ReadFileCustom("groups.json");
  res.render("admin", { users: users, groups: group });
};
export const AdminPostConroller = (req, res) => {
  // const { username, password, role, group, btn } = req.body;
  const { teacher } = req.body;
  // const users = ReadFileCustom("users.json");
  // console.log(Teacher);
  // users.push({
  //   id: users.at(-1)?.id + 1 || 1,
  //   username,
  //   password,
  //   group,
  //   role,
  // });
  // writeFileCustom("users.json", users);
  console.log(req.body.teacher);
  if (req.body.teacher == "teacher") {
    res.redirect("/api/admin-teacher");
    return;
  }
  if (req.body.group == "group") {
    res.redirect("/api/admin-group");
    return;
  }
  res.redirect("/api/admin");
};

export const adminTeacherGet = (req, res) => {
  const users = ReadFileCustom("users.json").filter((e) => e.role == "teacher");
  const courses = ReadFileCustom("courses.json");
  res.render("adminTeacher", { users: users, courses: courses });
};

export const adminTeacherPost = (req, res) => {
  const { username, password, group, role, select } = req.body;

  const users = ReadFileCustom("users.json");

  users.push({
    id: users.at(-1)?.id + 1 || 1,
    username,
    password,
    role: "teacher",
    group: [],
    title: select,
  });
  writeFileCustom("users.json", users);
  res.redirect("/api/admin-teacher");
};
export const adminTeacherBack = (req, res) => {
  if (req.body.teacher == "teacher") {
    res.redirect("/api/admin-teacher");
    return;
  }
  if (req.body.group == "group") {
    res.redirect("/api/admin-group");
    return;
  }
  if (req.body.student == "student") {
    res.redirect("/api/admin-student");
    return;
  }
  if (req.body.courses == "courses") {
    res.redirect("/api/admin-courses");
    return;
  }
  if (req.body.groups == "groups") {
    res.redirect("/api/teacher-groups");
    return;
  }
  if (req.body.Menu == "Menu") {
    res.redirect("/api/sign");
    return;
  }
};

export const adminGroupGet = (req, res) => {
  const groups = ReadFileCustom("groups.json");
  const courses = ReadFileCustom("courses.json");
  const { select } = req.body;
  const teachers = ReadFileCustom("users.json").filter(
    (e) => e.role == "teacher"
  );

  res.render("adminGroups", {
    teachers: teachers,
    groups: groups,
    courses: courses,
  });
};
export const adminGroupPost = (req, res) => {
  const groups = ReadFileCustom("groups.json");
  const { groupname, title, select } = req.body;
  const users = ReadFileCustom("users.json");
  const teachers = users;
  const teacher = teachers.find((e) => e.username == select);

  groups.push({
    id: groups.at(-1)?.id + 1 || 1,
    groupname,
    title,
    teacher: select,
    students: [],
  });

  teacher.groupname.push({
    id: teacher.groupname.at(-1)?.id + 1 || 1,
    groupname,
    title,
  });

  writeFileCustom("users.json", users);

  writeFileCustom("groups.json", groups);
  res.redirect("/api/admin-group");
};

export const adminStudentGet = (req, res) => {
  const courses = ReadFileCustom("courses.json");
  const Students = ReadFileCustom("users.json").filter(
    (e) => e.role == "student"
  );

  res.render("adminStudent", { Students: Students, courses: courses });
};
export const adminStudentPost = (req, res) => {
  const { groupname, username, password, grouptitle } = req.body;

  const groups = ReadFileCustom("groups.json");
  const users = ReadFileCustom("users.json");

  const dataGroups = groups;
  const group = dataGroups.find(
    (e) => (e.groupname == groupname) & (e.title == grouptitle)
  );
  console.log(group);
  if (group) {
    group.students.push({
      id: group.students.at(-1)?.id + 1 || 1,
      username,
      password,
      groupname,
      grouptitle,
    });
    groups.find((e) => {
      if (e.groupname == group.groupname && e.title == group.grouptitle) {
        groups.push(group);
      }
      console.log(groups);
    });
    writeFileCustom("groups.json", groups);

    users.push({
      id: users.at(-1)?.id + 1 || 1,
      username,
      password,
      groupname,
      grouptitle,
      role: "student",
    });
    writeFileCustom("users.json", users);
  } else if (!group) {
    res.status(404).json({ message: " NOT FOUND " });
  }
  res.redirect("/api/admin-student");
};

export const adminCourseGet = (req, res) => {
  const course = ReadFileCustom("courses.json");
  res.render("adminCourse", { courses: course });
};

export const adminCoursePost = (req, res) => {
  const course = ReadFileCustom("courses.json");
  const { title, price } = req.body;
  course.push({
    id: course.at(-1)?.id + 1 || 1,
    title,
    price,
  });
  writeFileCustom("courses.json", course);

  res.redirect("/api/admin-courses");
};
