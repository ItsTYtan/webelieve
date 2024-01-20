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