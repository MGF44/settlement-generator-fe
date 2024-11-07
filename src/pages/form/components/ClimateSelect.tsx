import { useContext } from "react";
import {
  FormContext,
  FormDispatchContext,
} from "../../../contexts/FormContext";
import { FormState } from "../../../reducers/form";
import { IClimate, ISubClimate } from "../../../types/climate";
import Generic from "../../../types/generic";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SxProps,
  Theme,
} from "@mui/material";

function ClimateSelect({ sx }: { sx: SxProps<Theme> }) {
  const state: FormState = useContext(FormContext);
  const dispatch = useContext(FormDispatchContext);

  const opt = (clim: IClimate, sub: Generic) => (
    <MenuItem value={sub.name} key={sub.name}>
      {clim.type} - {sub.name.replace(/ *\([^)]*\) */g, "")}
    </MenuItem>
  );

  const getOptions = () => {
    return state.climates
      .map((c: IClimate) => c.subTypes.map((s: Generic) => opt(c, s)))
      .reduce((p: JSX.Element[], n: JSX.Element[]) => [...p, ...n], []);
  };

  const onChange = (name: unknown) => {
    const content: ISubClimate = state.climates
      .map((v: IClimate) => v.subTypes)
      .reduce((p, n) => [...p, ...n])
      .filter((v: Generic) => v.name === name)[0];
    dispatch({ type: "form.climates", content });
  };

  return (
    <FormControl variant="standard" sx={sx}>
      <InputLabel id="Climate">Climate</InputLabel>
      <Select
        labelId="Climate"
        id="climate-input"
        onChange={(e) => onChange(e.target.value)}
        label="Climate"
        fullWidth
      >
        {getOptions()}
      </Select>
    </FormControl>
  );
}

export default ClimateSelect;
