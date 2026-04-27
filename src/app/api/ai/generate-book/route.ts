import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const result = await streamText({
    model: openai('gpt-4o-mini'),
    system: 'You are a helpful AI assistant for MontessoriMagic. Generates a full Montessori-aligned story book with pages, illustrations prompts, and learning objectives based on the child's profile, age, and selected topic.',
    prompt,
    maxTokens: 2048,
  });

  return result.toDataStreamResponse();
}
