import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Switch } from "../ui/switch";

interface FormSwitchProps {
  name: string;
  label: string;
}

const FormSwitch = ({ name, label }: FormSwitchProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex">
          <FormControl>
            <Switch
              ref={field.ref}
              onCheckedChange={field.onChange}
              checked={field.value}
            />
          </FormControl>
          <FormLabel>{label}</FormLabel>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { FormSwitch };
