import { getWinPossibilities } from "../constants/tic-tac-toe";

export default (state = { oPoints: [], xPoints: [], turn: 'o' }, action) => {
  switch (action.type) {
    case 'O_PLAY':
      return { ...state, oPoints: [...state.oPoints, action.choice], turn: 'x' };
    case 'X_PLAY':
      return { ...state, xPoints: [...state.xPoints, action.choice], turn: 'o' };
    case 'RESET':
      return { ...state, xPoints: [], oPoints: [], turn: 'o' };
  }
}