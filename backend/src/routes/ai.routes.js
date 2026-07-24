import { Router } from "express";
import {
    generateSummary,
    translateTranscript,
    saveTranscript
} from "../controllers/ai.controller.js";

const router = Router();

router.route("/summary").post(generateSummary);
router.route("/translate").post(translateTranscript);
router.post("/save-transcript", saveTranscript);

export default router;