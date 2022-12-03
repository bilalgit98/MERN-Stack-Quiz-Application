import { Router } from "express";
const router = Router();
import * as controller from "../controller/controller.js";

//Questions Route
// router.get("/questions", controller.getQuestions);
// router.post("/questions", controller.insertQuestions);

router
  .route("/questions")
  .get(controller.getQuestions)
  .post(controller.insertQuestions)
  .delete(controller.deleteQuestions);

router
  .result("/result")
  .get(controller.getResult)
  .post(controller.postResult)
  .delete(controller.deleteResult);
export default router;
