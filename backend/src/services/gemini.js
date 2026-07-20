import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
console.log("Gemini key:", process.env.GEMINI_API_KEY?.slice(0, 5));

console.log("Creating Gemini client...");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

console.log("Client created.");

export default ai;