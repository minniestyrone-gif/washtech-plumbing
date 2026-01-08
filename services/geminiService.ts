import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (userMessage: string) => {
  // Always use process.env.API_KEY directly as a named parameter in the constructor.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: "You are the digital plumbing assistant for Wash Tech Plumbing. You help users with common plumbing troubleshooting, explain services (leak detection, drain cleaning, water heater repair), and encourage them to book a professional if the task is complex. Be helpful, professional, and concise. Mention that Wash Tech Plumbing offers 24/7 emergency services.",
        temperature: 0.7,
      },
    });
    
    // Correct method: Use the .text property (not a method) to extract content.
    return response.text || "I'm sorry, I couldn't process that. Can you try again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong. Please call our hotline at 1-800-WASH-TECH.";
  }
};