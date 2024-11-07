import { ReactNode, useReducer } from "react";
import { FormContext, FormDispatchContext } from "../contexts/FormContext";
import formReducer, { FormState } from "../reducers/form";

export function FormProvider({ children }: { children: ReactNode }) {
  const initial: FormState = {
    climates: [],
    landforms: [],
    archetypes: [],
    sizes: [],
    species: [],
    incrementors: [],
    mLevels: [],
    formData: {
      name: "",
      archetype: "",
      size: "",
      incrementor: "",
      mLevel: "",
      species: [],
    },
  };
  const [state, dispatch] = useReducer(formReducer, initial);

  return (
    <FormContext.Provider value={state}>
      <FormDispatchContext.Provider value={dispatch}>
        {children}
      </FormDispatchContext.Provider>
    </FormContext.Provider>
  );
}
