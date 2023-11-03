import express from "express";

const repleRouter = express.Router();

import {
    postRepleSubmit,
    postGetReple,
    postRepleEdit,
    postRepleDelete,
} from "../controllers/repleController.js";

repleRouter.post("/submit", postRepleSubmit);

repleRouter.post("/getReple", postGetReple);

repleRouter.post("/edit", postRepleEdit);

repleRouter.post("/delete", postRepleDelete);

export default repleRouter;
