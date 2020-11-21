import express from "express";
import routes from "../routes";
import { editVideo, upload } from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.upload, upload);

export default videoRouter;