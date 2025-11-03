import { api } from "@/services";
import { Species } from "@/types/species.interface";
import { useQuery } from "@tanstack/react-query";

const useSpecies = () => {
  const {
    data: speciesData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["species"],
    staleTime: Infinity,
    queryFn: () => api.get<Species[]>("default-data/species"),
  });

  const speciesOptionsWithRandom = [
    ...(speciesData || []),
    { _id: "random", name: "Random" },
  ];

  return { speciesData, isLoading, error, speciesOptionsWithRandom };
};

export { useSpecies };
