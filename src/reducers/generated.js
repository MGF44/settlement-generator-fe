function generatedReducer(state, action) {
  switch (action.type) {
    case "npc": {
      return { ...state, npc: action.data };
    }
  }
}

export default generatedReducer;
