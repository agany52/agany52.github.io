import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    shortSummary: z.string(),
    executiveSummary: z.string(),
    question: z.string(),
    scopeData: z.string(),
    methodology: z.array(z.string()),
    findings: z.array(z.string()),
    recommendationLabel: z.string(),
    recommendation: z.string(),
    limitations: z.array(z.string()),
    tools: z.array(z.string()),
    featuredOrder: z.number(),
    codeUrl: z.url().optional(),
    codeLabel: z.string().optional(),
    secondaryUrl: z.url().optional(),
    secondaryLabel: z.string().optional(),
    visuals: z.array(z.object({
      key: z.enum(['operations-synthetic', 'heart-matrix', 'sega-platform', 'sega-trend']),
      alt: z.string(),
      caption: z.string(),
    })),
  }),
});

export const collections = { projects };
