import { useContext, useEffect } from "react";
import "./Form.scss";
import { FormContext, FormDispatchContext } from "../../contexts/FormContext";
import SettlementData, {
  SettlementDataStorage,
} from "../../services/settlement-data";
import { IClimate } from "../../types/climate";
import ILandform from "../../types/landform";
import Generic from "../../types/generic";
import ISpecies from "../../types/species";
import { Box, Button, TextField } from "@mui/material";
import GenericSelect from "./components/GenericSelect";
import ClimateSelect from "./components/ClimateSelect";
import LandformSelect from "./components/LandformSelect";
import SpeciesSelect from "./components/SpeciesSelect";
import { FormState } from "../../reducers/form";

const fetchData = async (
  dispatch: (arg0: {
    type: string;
    content: IClimate[] | Generic[] | string[] | ISpecies[];
  }) => unknown,
  dataStorage: SettlementDataStorage
) => {
  dataStorage
    .climates()
    .then((content: IClimate[]) => dispatch({ type: "climates", content }));
  dataStorage
    .landforms()
    .then((content: ILandform[]) => dispatch({ type: "landforms", content }));
  dataStorage
    .species()
    .then((content: ISpecies[]) => dispatch({ type: "species", content }));
  dataStorage
    .archetypes()
    .then((content: string[]) => dispatch({ type: "archetypes", content }));
  dataStorage
    .citySize()
    .then((content: string[]) => dispatch({ type: "sizes", content }));

  dataStorage
    .incrementors()
    .then((content: string[]) => dispatch({ type: "incrementors", content }));

  dataStorage
    .mLevels()
    .then((content: string[]) => dispatch({ type: "mLevels", content }));
};

function FormPage() {
  const state: FormState = useContext(FormContext);
  const dispatch = useContext(FormDispatchContext);
  const dataStorage = SettlementData();
  const sxMid = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "1rem",
  };
  useEffect(() => {
    fetchData(dispatch, dataStorage);
  }, []);

  const canSubmit = () => {
    return (
      !!state.formData.name &&
      !!state.formData.archetype &&
      !!state.formData.climate &&
      !!state.formData.incrementor &&
      !!state.formData.landform &&
      !!state.formData.mLevel &&
      !!state.formData.size &&
      !!state.formData.species.length
    );
  };

  return (
    <form className="form-flex">
      <TextField fullWidth label="Name" variant="standard" />
      <Box sx={sxMid}>
        <GenericSelect prop="sizes" sx={{ width: "50%" }} />
        <GenericSelect prop="incrementors" sx={{ width: "50%" }} />
      </Box>
      <Box sx={sxMid}>
        <GenericSelect prop="archetypes" sx={{ width: "50%" }} />
        <GenericSelect prop="mLevels" sx={{ width: "50%" }} />
      </Box>
      <Box sx={sxMid}>
        <ClimateSelect sx={{ width: "50%" }} />
        <LandformSelect sx={{ width: "50%" }} />
      </Box>
      <SpeciesSelect />

      <Button
        variant="outlined"
        disabled={!canSubmit()}
        fullWidth
        color="success"
      >
        Generate Settlement
      </Button>
    </form>
  );
}

export default FormPage;
