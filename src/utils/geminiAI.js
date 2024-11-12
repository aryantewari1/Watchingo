import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GPT_KEY32);
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });