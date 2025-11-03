import { npcGenerateSchema } from "@/views/NpcGenerator/schemas/npcGenerateSchema";
import z from "zod";

export interface Npc {
  age: number;
  eyes: string;
  gender: string;
  hair: string;
  name: string;
  skin: string;
  species: string;
}

export type NpcGeneratorFormValues = z.infer<typeof npcGenerateSchema>;
