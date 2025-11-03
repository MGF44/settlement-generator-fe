import { api } from "@/services";
import { Npc, NpcGeneratorFormValues } from "@/types/npc.interface";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAgeGroup } from "./useAgeGroup";

interface UseNpcGeneratorFormProps {
  onSuccess: (npc: Npc) => void;
}

const useNpcGeneratorForm = ({ onSuccess }: UseNpcGeneratorFormProps) => {
  const { ageGroupOptions } = useAgeGroup();

  const form = useForm<NpcGeneratorFormValues>({
    defaultValues: {
      species: { _id: "random", name: "Random" },
      ageGroup: ageGroupOptions[0].value,
      randomProfession: false,
      randomClass: false,
    },
  });

  const onSubmit = async (data: NpcGeneratorFormValues) => {
    try {
      const response = (await api.post("gen/npc/", data)) as unknown as Npc;

      onSuccess(response);
    } catch (error) {
      toast.error("Failed to generate NPC. Please try again.");
      console.error("Error generating NPC:", error);
    }
  };

  return { form, onSubmit };
};

export { useNpcGeneratorForm };
