import { Router } from "express";
const router = Router();
//Questions Route

router.get("/questions", (req, res) => {
  try {
    res.json("Questions Request");
  } catch (error) {
    res.json(error);
  }
});

export default router;
