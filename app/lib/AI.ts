import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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", 
  dangerouslyAllowBrowser: true
});

export default function getAIResponse(prompt: string) {
    return openai.chat.completions.create({
      messages: [{ role: "system", content: prompt}],
      model: "gpt-3.5-turbo",
      stream: true
    });
}