import { api } from "@/services";
import { Npc, NpcGeneratorFormValues } from "@/types/npc.interface";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAgeGroup } from "./useAgeGroup";

interface UseNpcGeneratorFormProps {
  onSuccess: (npc: Npc) => void;
  onError?: () => void;
}

const useNpcGeneratorForm = ({
  onSuccess,
  onError,
}: UseNpcGeneratorFormProps) => {
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
      const response = (await api.post("gen/npc/", {
        ...data,
        ...(data.species._id === "random" ? { species: undefined } : {}),
      })) as unknown as Npc;

      onSuccess(response);
    } catch (error) {
      onError?.();
      toast.error("Failed to generate NPC. Please try again.");
      console.error("NPC Generation Error:", error);
    }
  };

  return { form, onSubmit };
};

export { useNpcGeneratorForm };
