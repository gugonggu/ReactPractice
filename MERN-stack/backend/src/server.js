import express from "express";
import morgan from "morgan";
import path from "path";

import postRouter from "./routers/postRouter.js";
import userRouter from "./routers/userRouter.js";
import repleRouter from "./routers/repleRouter.js";

const app = express();

const reactPath = path.join(path.resolve(), "../frontend/build");

app.use(express.static(reactPath));
app.use("/image", express.static("./image"));

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    return res.sendFile(reactPath + "/index.html");
});

app.get("*", (req, res) => {
    return res.sendFile(reactPath + "/index.html");
});

app.use("/api/post", postRouter);
app.use("/api/user", userRouter);
app.use("/api/reple", repleRouter);

export default app;
