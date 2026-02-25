import type { NatureData } from "../models/types";

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;


export const fetchNatureInfo = async (city: string, date: string): Promise<NatureData> => {
  const prompt = `
You are a nature expert. Based on the location ${city} and today's date ${date}, 
what birds, plants and seasonal phenomena would a person realistically observe 
outdoors RIGHT NOW? Be specific to this exact time of year and geographic region.

Return ONLY a JSON object with this structure (no markdown, no backticks):
{
  "birds": [{"name": "", "description": ""}],
  "plants": [{"name": "", "description": "", "season": ""}],
  "moodTitle": "",
  "description": "",
  "imageQuery": ""
}

Return exactly 3 birds and 5 plants.
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
    console.error("Could not parse JSON, using fallback");
    return {
      birds: [],
        plants: [],
        moodTitle: "Nature awaits",
        description: "Could not load nature data. Try again.",
        imageQuery: "nature forest"
    }
    }
  

  return parsed;
};