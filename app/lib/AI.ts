import OpenAI from "openai";

const API_KEY='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'

const openai = new OpenAI({apiKey: API_KEY, dangerouslyAllowBrowser: true});

export default function getAIResponse(prompt: string) {
    return openai.chat.completions.create({
      messages: [{ role: "system", content: prompt}],
      model: "gpt-3.5-turbo",
      stream: true
    });
}