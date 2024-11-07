import { useContext } from "react";
import {
  FormContext,
  FormDispatchContext,
} from "../../../contexts/FormContext";
import { FormState } from "../../../reducers/form";
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  SxProps,
  Theme,
} from "@mui/material";

function ClimateSelect({ prop, sx }: { prop: string; sx: SxProps<Theme> }) {
  const state: FormState = useContext(FormContext);
  const dispatch = useContext(FormDispatchContext);

  const opt = (gen: string) => (
    <MenuItem value={gen} key={gen}>
      {format(gen)} 
    </MenuItem>
  );
  const format = (str: string) => {
    return (
      String(str[0]).toUpperCase() + String(str).slice(1).toLowerCase()
    ).replace("_", " ");
  };
  const getProp = () => state[prop as keyof FormState] as string[];
  const getOptions = () => getProp().map((c: string) => opt(c));
  const onChange = (gen: unknown) => {
    const content: string = getProp().filter((v: string) => v === gen)[0];
    dispatch({ type: `form.${prop}`, content });
  };

  return (
    <FormControl variant="standard" sx={sx}>
      <InputLabel id={prop}>
        {format(prop === "mLevels" ? "Magic Level" : prop)}
      </InputLabel>
      <Select
        labelId={prop}
        id={`${prop}-input`}
        onChange={(e) => onChange(e.target.value)}
        label={prop}
      >
        {getOptions()}
      </Select>
    </FormControl>
  );
}

{
  /* <FormControl id={prop} sx={sx}>
<FormControl.Label>{prop}</FormControl.Label>
<Select onChange={} block={block}>

</Select>
</FormControl> */
}
export default ClimateSelect;
