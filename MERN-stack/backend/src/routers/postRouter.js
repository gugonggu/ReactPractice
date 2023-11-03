import express from "express";

import {
    post,
    postList,
    postDetail,
    postEdit,
    postDelete,
    postImageUpload,
} from "../controllers/controller.js";

const postRouter = express.Router();

postRouter.post("/submit", post);

postRouter.post("/list", postList);

postRouter.post("/detail", postDetail);

postRouter.post("/edit", postEdit);

postRouter.post("/delete", postDelete);

postRouter.post("/image/upload", postImageUpload);

export default postRouter;
