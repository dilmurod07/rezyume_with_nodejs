import {
  adminCourseGet,
  adminCoursePost,
  adminGetController,
  adminGroupGet,
  adminGroupPost,
  AdminPostConroller,
  adminStudentGet,
  adminStudentPost,
  adminTeacherBack,
  adminTeacherGet,
  adminTeacherPost,
} from "../controllers/admin.controllers.js";
import {
  GetControllers,
  PostControllers,
} from "../controllers/Auth.Sign.controllers.js";
import { ValidationMiddleware } from "../middleware/validation.middleware.js";
import { AUTH_SCHEMA } from "../schema/auth.schema.js";
import { ADMIN_SCHEMA } from "../schema/Admin.schema.js";
import { GROUPS_SCHEMA } from "../schema/admin.groups.js";
import { STUDENT_SCHEMA } from "../schema/admin.student.schema.js";
import { Router } from "express";
import { COURSES_SCHEMA } from "../schema/admin.courses.js";
import {
  teacherGetConroller,
  teacherGroupsGet,
  teacherPostConroller,
} from "../controllers/teacherControllers.js";
import { VerifyToken } from "../middleware/TokenVerify.js";
import { studentGetController } from "../controllers/studentController.js";

const router = Router();

export default router
  .get("/sign", ValidationMiddleware(AUTH_SCHEMA), GetControllers)
  .get("/admin", adminGetController)
  .get("/teacher", teacherGetConroller)
  .get("/admin-teacher", adminTeacherGet)
  .get("/admin-group", adminGroupGet)
  .get("/admin-student", adminStudentGet)
  .get("/admin-courses", adminCourseGet)
  .get("/teacher-groups", VerifyToken, teacherGroupsGet)
  .get("/student", VerifyToken, studentGetController)
  .post("/sign", ValidationMiddleware(AUTH_SCHEMA), PostControllers)
  .post("/admin", AdminPostConroller)
  .post("/admin-teacher", ValidationMiddleware(ADMIN_SCHEMA), adminTeacherPost)
  .post("/admin-teacher", AdminPostConroller)
  .post("/teacher-back", adminTeacherBack)
  .post("/teacher-groups", teacherPostConroller)
  .post("/admin-group", ValidationMiddleware(GROUPS_SCHEMA), adminGroupPost)
  .post(
    "/admin-student",
    ValidationMiddleware(STUDENT_SCHEMA),
    adminStudentPost
  )
  .post(
    "/admin-courses",
    ValidationMiddleware(COURSES_SCHEMA),
    adminCoursePost
  );
