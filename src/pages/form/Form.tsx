import { useContext, useEffect } from "react";
import "./Form.scss";
import { FormDispatchContext } from "../../contexts/FormContext";
import SettlementData, {
  SettlementDataStorage,
} from "../../services/settlement-data";
import { IClimate } from "../../types/climate";
import ILandform from "../../types/landform";
import Generic from "../../types/generic";
import ClimateSelect from "./components/ClimateSelect";
import LandformSelect from "./components/LandformSelect";
import GenericSelect from "./components/GenericSelect";

const fetchData = async (
  dispatch: (arg0: {
    type: string;
    content: IClimate[] | Generic[] | string[];
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
  // const state: FormState = useContext(FormContext);
  const dispatch = useContext(FormDispatchContext);
  const dataStorage = SettlementData();

  useEffect(() => {
    fetchData(dispatch, dataStorage);
  }, []);

  return (
    <aside>
      <form action="">
        <ClimateSelect />
        <LandformSelect />
        <GenericSelect prop="archetypes" />
        <GenericSelect prop="sizes" />
        <GenericSelect prop="incrementors" />
        <GenericSelect prop="mLevels" />
      </form>
    </aside>
  );
}

export default FormPage;
