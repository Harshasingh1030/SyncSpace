import "dotenv/config";
import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

console.log("Client created.");

export default ai;