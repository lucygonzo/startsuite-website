import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    thumbnail: z.string().optional(),
    summary: z.string(),
    stats: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional(),
    testimonial: z.object({
      quote: z.string(),
      name: z.string(),
      role: z.string(),
    }).optional(),
    published: z.boolean().default(false),
    date: z.date(),
  }),
});

const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['guide', 'template', 'insight', 'toolkit']),
    summary: z.string(),
    thumbnail: z.string().optional(),
    published: z.boolean().default(false),
    date: z.date(),
  }),
});

export const collections = {
  'case-studies': caseStudies,
  'resources': resources,
};
