import type { NatureData } from "../models/types";

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;


export const fetchNatureInfo = async (city: string, date: string): Promise<NatureData> => {
  const prompt = `
You are a nature guide. What is happening in nature in ${city} on ${date}?

Return ONLY a JSON object with this structure (no markdown, no backticks):
{
  "birds": [{"name": "", "description": ""}, {"name": "", "description": ""}, {"name": "", "description": ""}],
  "plants": [{"name": "", "description": "", "season": ""}, {"name": "", "description": "", "season": ""}, {"name": "", "description": "", "season": ""}, {"name": "", "description": "", "season": ""}, {"name": "", "description": "", "season": ""}],
  "moodTitle": "",
  "description": "",
  "imageQuery": ""
}
`;

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Groq error ${response.status}: ${errText}`);
  }

  const data = await response.json();

  const text: string | undefined = data?.choices?.[0]?.message?.content;
  if (!text) throw new Error("Groq returned no text.");

  const cleaned = text.replace(/```json|```/g, "").trim();

  let parsed: NatureData;
  try {
    parsed = JSON.parse(cleaned);
  } catch {
    console.error("Raw Groq text:", text);
    throw new Error("Could not parse Groq JSON.");
  }

  return parsed;
};