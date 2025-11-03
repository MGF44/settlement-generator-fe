import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { useSpecies } from "@/hooks/useSpecies";
import { cn } from "@/lib/utils";
import { useFormContext, useWatch } from "react-hook-form";

const SpeciesSelector = () => {
  const { speciesOptionsWithRandom } = useSpecies();
  const { control, setValue } = useFormContext();

  const selectedSpecies = useWatch({
    control,
    name: "species",
  });

  return (
    <div className="flex flex-col gap-4">
      <Label htmlFor="species">Species</Label>

      <div className="flex flex-wrap justify-center gap-4">
        {speciesOptionsWithRandom?.map((species) => (
          <button
            type="button"
            key={species._id}
            className="flex flex-col items-center cursor-pointer hover:scale-110 transition-all"
            onClick={() => setValue("species", species)}
          >
            <Avatar
              className={cn(
                "w-17 h-17",
                selectedSpecies._id === species._id &&
                  "border-3 border-amber-800 text-amber-800"
              )}
            >
              <AvatarImage
                src={`./src/assets/imgs/${species?.name.toLowerCase()}.png`}
              />
              <AvatarFallback>?</AvatarFallback>
            </Avatar>

            <p
              className={cn(
                "text-center text-xs mt-1",
                selectedSpecies._id === species._id &&
                  "text-amber-800 font-bold"
              )}
            >
              {species.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export { SpeciesSelector };
