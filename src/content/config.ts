import { z, defineCollection } from "astro:content";

const program = defineCollection({
  type: "content",
  schema: z.object({
    speaker: z.string(),
    title: z.string(),
    date: z.date(),
    time: z.string(),
    type: z.enum([
      "Conférence",
      "Atelier",
      "Hackathon",
      "Visioconférence",
    ]),
    place: z.string(),
    description: z.string(),
  })
});

export const collections = { program };
