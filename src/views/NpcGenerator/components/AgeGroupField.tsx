import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useFormContext } from "react-hook-form";
import { useAgeGroup } from "../hooks/useAgeGroup";

const AgeGroupField = () => {
  const { ageGroupOptions } = useAgeGroup();

  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="ageGroup"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Age Group</FormLabel>
          <FormControl>
            <RadioGroup
              ref={field.ref}
              onValueChange={field.onChange}
              value={field.value}
              className="flex flex-wrap mx-auto gap-4"
            >
              {ageGroupOptions.map(({ label, value }) => (
                <div key={value} className="flex items-center space-x-2">
                  <RadioGroupItem value={value} id={value} />
                  <Label htmlFor={value}>{label}</Label>
                </div>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { AgeGroupField };
