import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const sourceSchema = z.object({
  name: z.string(),
  published: z.string().optional(),
  url: z.string().url(),
});

const articleSchema = z.object({
  title: z.string(),
  dek: z.string(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  lang: z.enum(["zh", "en"]),
  section: z.enum(["alert", "daily", "knowledge"]),
  topics: z.array(z.string()).default([]),
  counterpart: z.string().optional(),
  sources: z.array(sourceSchema).default([]),
});

export const collections = {
  alerts: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/alerts" }),
    schema: articleSchema,
  }),
  daily: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/daily" }),
    schema: articleSchema,
  }),
  knowledge: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/knowledge" }),
    schema: articleSchema,
  }),
};
