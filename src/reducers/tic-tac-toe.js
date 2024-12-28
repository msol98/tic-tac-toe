import { getWinPossibilities } from "../constants/tic-tac-toe";

export default (state = { oPoints: [], xPoints: [], turn: 'o' }, action) => {
  switch (action.type) {
    case 'O_PLAY':
      if (state.oPoints.length >= 2)
        var isWon = getWinPossibilities([...state.oPoints, action.choice]).some(possibility => possibility == true);
      return { ...state, oPoints: [...state.oPoints, action.choice], turn: 'x', winner: isWon && 'o' };
    case 'X_PLAY':
      if (state.xPoints.length >= 2)
        var isWon = getWinPossibilities([...state.xPoints, action.choice]).some(possibility => possibility == true);
      return { ...state, xPoints: [...state.xPoints, action.choice], turn: 'o', winner: isWon && 'x'};        
    case 'RESET':
      return { ...state, xPoints: [], oPoints: [], turn: 'o', winner: null };
  }
}