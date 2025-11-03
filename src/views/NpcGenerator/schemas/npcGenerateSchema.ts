import z from "zod";

export const npcGenerateSchema = z.object({
  species: z.object({
    _id: z.string(),
    name: z.string(),
    __v: z.number().optional(),
    subSpecies: z.array(z.unknown()).optional(),
    distribution: z.number().optional(),
  }),
  ageGroup: z.string().min(1),
  randomProfession: z.boolean(),
  randomClass: z.boolean(),
});
