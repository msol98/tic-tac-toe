export default (state = { oPoints: [], xPoints: [] }, action) => {
  switch (action.type) {
    case 'O_PLAY':
      return { ...state, oPoints: [...state.oPoints, action.choice] };
    case 'X_PLAY':
      return { ...state, xPoints: [...state.xPoints, action.choice] };
    case 'RESET':
      return { ...state, xPoints: [], oPoints: [] };
  }
}