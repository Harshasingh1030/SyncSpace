import { Router } from "express";
import { generateSummary, translateTranscript } from "../controllers/ai.controller.js";

const router = Router();

router.route("/summary").post(generateSummary);
router.route("/translate").post(translateTranscript);

export default router;