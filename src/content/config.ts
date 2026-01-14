// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const foundersCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    role: z.string(),
    bio: z.string().optional(),
    avatar: z.object({
      seed: z.string(),
      style: z.string().default('avataaars'),
    }),
    order: z.number(),
    publishDate: z.string().transform(str => new Date(str)),
    lang: z.enum(['it', 'en']).default('it'),
  }),
});

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    tagline: z.string(),
    status: z.enum(['coming-soon', 'active']).default('coming-soon'),
    features: z.array(z.string()),
    order: z.number(),
    lang: z.enum(['it', 'en']).default('it'),
  }),
});

const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['it', 'en']).default('it'),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'founders': foundersCollection,
  'products': productsCollection,
  'about': aboutCollection,
};
