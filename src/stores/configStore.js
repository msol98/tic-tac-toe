import { createStore } from "redux";
import ticTacToeReducer from "./../reducers/tic-tac-toe"; 

export default createStore(ticTacToeReducer);