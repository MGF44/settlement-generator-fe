import { useContext } from "react";
import {
  FormContext,
  FormDispatchContext,
} from "../../../contexts/FormContext";
import { FormState } from "../../../reducers/form";

function ClimateSelect({ prop }: { prop: string }) {
  const state: FormState = useContext(FormContext);
  const dispatch = useContext(FormDispatchContext);

  const opt = (gen: string) => (
    <option value={gen} key={gen}>
      {gen}
    </option>
  );

  const getProp = () => state[prop as keyof FormState] as string[];

  const getOptions = () => getProp().map((c: string) => opt(c));

  const onChange = (gen: string) => {
    const content: string = getProp().filter((v: string) => v === gen)[0];
    dispatch({ type: `form.${prop}`, content });
  };

  return (
    <select id={prop} onChange={(e) => onChange(e.target.value)}>
      {getOptions()}
    </select>
  );
}

export default ClimateSelect;
