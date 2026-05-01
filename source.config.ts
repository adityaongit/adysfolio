import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import { metaSchema, pageSchema } from "fumadocs-core/source/schema";
import lastModified from 'fumadocs-mdx/plugins/last-modified';
import { remarkReadingTime } from "@/lib/remarkReadingTime";
import { z } from "zod/v4";

export const docs = defineDocs({
    dir: "content/blog",
    docs: {
        schema: pageSchema.extend({
            tags: z.array(z.string()).optional(),
            date: z.coerce.date().optional(),
        }),
        postprocess: {
            includeProcessedMarkdown: true,
            valueToExport: ['readingTime'],
        },
    },
    meta: {
        schema: metaSchema,
    },
});

export const projectsDocs = defineDocs({
    dir: "content/projects",
    docs: {
        schema: pageSchema.extend({
            tagline: z.string(),
            tags: z.array(z.string()).default([]),
            live: z.string().nullable().default(null),
            github: z.string(),
            wip: z.boolean().optional(),
            order: z.number().optional(),
            logo: z.string().optional(),
            brandIcon: z.string().optional(),
        }),
    },
    meta: {
        schema: metaSchema,
    },
});

export const experienceDocs = defineDocs({
    dir: "content/experience",
    docs: {
        schema: pageSchema.extend({
            company: z.string(),
            role: z.string(),
            period: z.string(),
            location: z.string(),
            tags: z.array(z.string()).default([]),
            order: z.number().optional(),
            logo: z.string().optional(),
            brandIcon: z.string().optional(),
        }),
    },
    meta: {
        schema: metaSchema,
    },
});

export default defineConfig({
    plugins: [lastModified()],
    mdxOptions: {
        remarkPlugins: [remarkReadingTime],
    },
});
