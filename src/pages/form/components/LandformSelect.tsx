import { useContext } from "react";
import {
  FormContext,
  FormDispatchContext,
} from "../../../contexts/FormContext";
import { FormState } from "../../../reducers/form";
import ILandform from "../../../types/landform";
import Generic from "../../../types/generic";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SxProps,
  Theme,
} from "@mui/material";

function LandformSelect({ sx }: { sx: SxProps<Theme> }) {
  const state: FormState = useContext(FormContext);
  const dispatch = useContext(FormDispatchContext);

  const opt = (c: ILandform): JSX.Element => (
    <MenuItem value={c.name} key={c.name}>
      {c.name}
    </MenuItem>
  );

  const getOptions = () => state.landforms.map(opt);
  const onChange = (name: unknown) => {
    const content: ILandform = state.landforms.filter(
      (land: Generic) => land.name === name
    )[0];
    dispatch({ type: "form.landforms", content });
  };
  return (
    <FormControl variant="standard" sx={sx}>
      <InputLabel id="Landform">Landform</InputLabel>
      <Select
        labelId="Landform"
        id="landform-input"
        onChange={(e) => onChange(e.target.value)}
        label="Landform"
        fullWidth
      >
        {getOptions()}
      </Select>{" "}
    </FormControl>
  );
}

export default LandformSelect;
