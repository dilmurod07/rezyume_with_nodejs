import { join } from "path";
import express from "express";
import routes from "./routes/routes.js";
import cookieParser from "cookie-parser";
const app = express();

app.set("view engine", "ejs");
app.set("views", join(process.cwd(), "src", "views"));

app.use(cookieParser());
app.use("/public", express.static(join(process.cwd(), "src", "public")));
app.use("/uploads", express.static(join(process.cwd(), "src", "uploads")));
app.use(express.urlencoded());
app.use("/api", routes);

app.listen(2021, console.log("listening"));
