import status from "http-status";
import ai from "../services/gemini.js";

const generateSummary = async (req, res) => {
    try {
        const { transcript } = req.body;

        if (!transcript) {
            return res.status(status.BAD_REQUEST).json({
                success: false,
                message: "Transcript is required.",
            });
        }

        const prompt = `
You are an AI meeting assistant.

Summarize the following meeting transcript in clear and concise bullet points.

Transcript:
${transcript}
`;

        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: prompt,
        });

        return res.status(status.OK).json({
            success: true,
            summary: response.text,
        });

    } catch (error) {
        console.error(error);

        return res.status(status.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message,
        });
    }
};

const translateTranscript = async (req, res) => {
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
            model: "gemini-3.5-flash",
            contents: prompt,
        });

        return res.status(status.OK).json({
            success: true,
            translation: response.text,
        });

    } catch (error) {
        console.error(error);

        return res.status(status.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Failed to translate transcript.",
        });
    }
};

export {generateSummary, translateTranscript}