import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getGloriaInfo() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Summarize the professional profile of Gloria Njeru from https://www.linkedin.com/in/gloria-njeru-3ab01827a/. Focus on her cloud computing and developer experience. Return the data in a structured JSON format with fields: name, title, bio, skills (array), experience (array of objects with role, company, period, description), and projects (array of objects).",
      config: {
        tools: [{ urlContext: {} }],
        responseMimeType: "application/json"
      }
    });
    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Error fetching Gloria's info:", error);
    return null;
  }
}
