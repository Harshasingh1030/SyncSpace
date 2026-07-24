import status from "http-status";
import ai from "../services/gemini.js";
import { Meeting } from "../models/meeting.model.js";

const generateSummary = async (req, res) => {
    console.log("===== SUMMARY ROUTE HIT =====");
    console.log(req.body);
    try {

        const { meetingCode } = req.body;

        if (!meetingCode) {
            return res.status(status.BAD_REQUEST).json({
                success: false,
                message: "Meeting code is required.",
            });
        }

        const meeting = await Meeting.findOne({ meetingCode });

        if (!meeting) {
            return res.status(status.NOT_FOUND).json({
                success: false,
                message: "Meeting not found.",
            });
        }

        if (!meeting.transcript) {
            return res.status(status.BAD_REQUEST).json({
                success: false,
                message: "Transcript not found.",
            });
        }

        const prompt = `
            You are an AI meeting assistant.

            Summarize the following meeting transcript in clear and concise bullet points.

            Transcript:
            ${meeting.transcript}
            `;

        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash-lite",
            contents: prompt,
        });

        meeting.summary = response.text;
        await meeting.save();

        return res.status(status.OK).json({
            success: true,
            summary: response.text,
        });

    } catch (error) {
        console.error("========== ERROR ==========");
        console.error(error);
        console.error(error.stack);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const translateTranscript = async (req, res) => {
    console.log("===== TRANSLATE ROUTE HIT =====");
    console.log(req.body);
    try {
        const { transcript, targetLanguage } = req.body;

        if (!transcript || !targetLanguage) {
            return res.status(status.BAD_REQUEST).json({
                success: false,
                message: "Transcript and target language are required.",
            });
        }

        const prompt = `
            Translate the following meeting transcript into ${targetLanguage}.

            Only return the translated transcript.

            Transcript:
            ${transcript}
            `;

        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash-lite",
            contents: prompt,
        });

        return res.status(status.OK).json({
            success: true,
            translation: response.text,
        });

    } catch (error) {
        console.error("Gemini Error:", error);
        console.error(error.stack);

        return res.status(status.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Failed to translate transcript.",
        });
    }
};

const saveTranscript = async (req, res) => {

    try {

        const { meetingCode, transcript } = req.body;

        if (!meetingCode || !transcript) {
            return res.status(400).json({
                success: false,
                message: "Meeting code and transcript are required.",
            });
        }

        const meeting = await Meeting.findOneAndUpdate(
            { meetingCode },
            { transcript },
            { new: true }
        );

        if (!meeting) {
            return res.status(404).json({
                success: false,
                message: "Meeting not found.",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Transcript saved successfully.",
        });

    } catch (error) {

        console.error("Gemini Error:", error);
        console.error(error.stack);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }

};

export {generateSummary, translateTranscript, saveTranscript}