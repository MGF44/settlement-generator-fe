import { useContext } from "react";
import {
  FormContext,
  FormDispatchContext,
} from "../../../contexts/FormContext";
import { FormState } from "../../../reducers/form";
import ILandform from "../../../types/landform";
import Generic from "../../../types/generic";

function LandformSelect() {
  const state: FormState = useContext(FormContext);
  const dispatch = useContext(FormDispatchContext);

  const opt = (c: ILandform): JSX.Element => (
    <option value={c.name} key={c.name}>
      {c.name}
    </option>
  );

  const getOptions = () => state.landforms.map(opt);
  const onChange = (name: string) => {
    const content: ILandform = state.landforms.filter(
      (land: Generic) => land.name === name
    )[0];
    dispatch({ type: "form.landforms", content });
  };
  return (
    <select id="landform" onChange={(e) => onChange(e.target.value)}>
      {getOptions()}
    </select>
  );
}

export default LandformSelect;
