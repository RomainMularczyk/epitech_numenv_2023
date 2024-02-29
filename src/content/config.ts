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
    discord: z.enum([
      "ef-01-02-2024",
      "cm-29-04-2024",
      "pg-08-03-2024",
      "sc-02-05-2024",
      "jp-04-05-2024",
      "xp-05-06-2024",
      "hackathon",
      "data-battle",
    ]),
    place: z.string(),
    description: z.string(),
    draft: z.boolean(),
  })
});

const books = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    date: z.number(),
    place: z.string(),
    publisher: z.string(),
  })
})

export const collections = { books, program };
