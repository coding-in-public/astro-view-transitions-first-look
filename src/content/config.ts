import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      author: z.enum(["Anna Dixon", "Victoria Greenfelder", "Darnell McClure"]),
      image: z.object({
        src: image().refine((img) => img.width >= 1080, {
          message: "Cover image must be at least 1080 pixels wide!",
        }),
        alt: z.string(),
      }),
      description: z
        .string()
        .max(
          160,
          "For best SEO results, please keep the description under 160 characters."
        ),
      draft: z.boolean().default(false),
      category: z.enum(["CSS", "Reference Docs", "Astro", "General"]),
    }),
});

export const collections = { blog };
