import { useContext } from "react";
import {
  FormContext,
  FormDispatchContext,
} from "../../../contexts/FormContext";
import { FormState } from "../../../reducers/form";
import ISpecies from "../../../types/species";
import { FormControl, FormControlLabel, Switch } from "@mui/material";

function SpeciesSelect() {
  const state: FormState = useContext(FormContext);
  const dispatch = useContext(FormDispatchContext);

  const opt = (c: ISpecies): JSX.Element => (
    <FormControlLabel
      control={<Switch value={c.name} />}
      label={c.name}
      checked={isChecked(c)}
      labelPlacement="bottom"
      sx={{ flex: 1 }}
      onChange={() => onChange(c.name)}
    />
  );
  const isChecked = (sp: ISpecies) => {
    return state.formData.species.filter((v: ISpecies) => v.name === sp.name).length > 0
  }
  const getOptions = () => state.species.map(opt);
  
  const onChange = (species: string) => {
    const content: ISpecies = state.species.filter(
      (land: ISpecies) => land.name === species
    )[0];
    dispatch({ type: "form.species", content });
  };
  return (
    <FormControl
      variant="standard"
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {getOptions()}
    </FormControl>
  );
}
export default SpeciesSelect;
