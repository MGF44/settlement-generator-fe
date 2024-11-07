
interface SettlementState {
  name: string;
}

interface SettlementAction {
  type: string;
  content: unknown;
}
const settlementReducer = (state: SettlementState, action: SettlementAction) => {
  switch (action.type) {
    default:
      return state
  }
  return state
}

export default settlementReducer;
