import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const retosCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/retos' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        difficulty: z.enum(['facil', 'medio', 'dificil']),
        tags: z.array(z.string()),
        image: z.string().optional(),
        demo: z.string().url().optional(),
        completedDate: z.date(),
        customStyles: z.string().optional(),
    }),
});

export const collections = {
    retos: retosCollection,
};