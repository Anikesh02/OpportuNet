import { Router } from "express";
import { getMockInterviewQuestions, evaluateAnswer } from "../controllers/mockInterview.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();
router.route("/get-questions").post(verifyJWT, getMockInterviewQuestions);
router.route("/evaluate-answer").post(verifyJWT, evaluateAnswer);

export default router;