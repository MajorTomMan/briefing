import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const sourceSchema = z.object({
  name: z.string(),
  published: z.string().optional(),
  url: z.string().url(),
});

const formulaSchema = z.object({
  name: z.string(),
  expression: z.string(),
  note: z.string().optional(),
  source: sourceSchema,
});

const quoteSchema = z.object({
  quote: z.string(),
  translation: z.string().optional(),
  note: z.string().optional(),
  source: sourceSchema,
});

const chartSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  type: z.enum(["line", "bar"]),
  xLabel: z.string().optional(),
  yLabel: z.string().optional(),
  unit: z.string().optional(),
  labels: z.array(z.string()).min(1),
  series: z.array(z.object({
    name: z.string(),
    values: z.array(z.number()).min(1),
  })).min(1),
  source: sourceSchema,
  note: z.string().optional(),
  yMin: z.number().optional(),
  yMax: z.number().optional(),
});

const articleSchema = z.object({
  title: z.string(),
  dek: z.string(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  lang: z.enum(["zh", "en"]),
  section: z.enum(["alert", "daily", "knowledge"]),
  kind: z.enum(["feature", "principle"]).default("feature"),
  topics: z.array(z.string()).default([]),
  counterpart: z.string().optional(),
  sources: z.array(sourceSchema).default([]),
  formulas: z.array(formulaSchema).default([]),
  quotes: z.array(quoteSchema).default([]),
  charts: z.array(chartSchema).default([]),
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
