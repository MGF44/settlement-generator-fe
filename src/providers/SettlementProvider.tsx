import { ReactNode, useReducer } from "react";
import {
  SettlementsContext,
  SettlementsDispatchContext,
} from "../contexts/SettlementContext";
import settlementReducer from "../reducers/settlement";

export function SettlementProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(settlementReducer, { name: "" });

  return (
    <SettlementsContext.Provider value={state}>
      <SettlementsDispatchContext.Provider value={dispatch}>
        {children}
      </SettlementsDispatchContext.Provider>
    </SettlementsContext.Provider>
  );
}
