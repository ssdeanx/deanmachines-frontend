import { Portkey } from "portkey-ai";
// Construct a client with a virtual key
const portkey = new Portkey({
  apiKey: "nMOmYgZPb1NXpJLMApLasJQjt2YX",
  virtualKey: "google-virtual-1348d8",
});
const chatCompletion = await portkey.chat.completions.create({
  messages: [{ role: "user", content: "What is Portkey" }],
  model: "gemini-1.5-pro",
  maxTokens: 64,
});
console.log(chatCompletion.choices);
