import { useContext } from "react";
import {
  FormContext,
  FormDispatchContext,
} from "../../../contexts/FormContext";
import { FormState } from "../../../reducers/form";
import { IClimate, ISubClimate } from "../../../types/climate";
import Generic from "../../../types/generic";

function ClimateSelect() {
  const state: FormState = useContext(FormContext);
  const dispatch = useContext(FormDispatchContext);

  const opt = (clim: IClimate, sub: Generic) => (
    <option value={sub.name} key={sub.name}>
      {clim.type} - {sub.name}
    </option>
  );

  const getOptions = () => {
    return state.climates
      .map((c: IClimate) => c.subTypes.map((s: Generic) => opt(c, s)))
      .reduce((p: JSX.Element[], n: JSX.Element[]) => [...p, ...n], []);
  };

  const onChange = (name: string) => {
    const content: ISubClimate = state.climates
      .map((v: IClimate) => v.subTypes)
      .reduce((p, n) => [...p, ...n])
      .filter((v: Generic) => v.name === name)[0];
    dispatch({ type: "form.climates", content });
  };

  return (
    <select id="climate" onChange={(e) => onChange(e.target.value)}>
      {getOptions()}
    </select>
  );
}

export default ClimateSelect;
