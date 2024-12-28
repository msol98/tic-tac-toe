import './App.css';
import { connect } from 'react-redux';
import { oPlay, xPlay, reset } from './actions/tic-tac-toe';
import { allPoints } from './constants/tic-tac-toe';

function App({ dispatch, turn, winner }) { // todo: highlight the buttons that made winner win the game

  function submitChoice(selectedPoint) {
    const selectedBtn = document.getElementById(selectedPoint.index);
    if (!!selectedBtn.innerText) return;
    if (turn == 'o') {
      dispatch(oPlay(selectedPoint));
      selectedBtn.innerText = 'O';
    } else {
      dispatch(xPlay(selectedPoint));
      selectedBtn.innerText = 'X';
    }
  }

  function resetGame() {
    dispatch(reset());
    document.querySelectorAll('.point-btn').forEach(btn => btn.innerText = '');
  }

  return (
    <div className='pt-28'>
      {!!winner && (<h1 className='text-center text-[22px]'><span className='font-bold'>{winner}</span> won</h1>)}
      {!winner && <h2 className='text-center text-[20px]'><span className='font-bold'>{turn}</span>'s turn</h2>}
      <div className='grid grid-cols-3 w-36 mx-auto mt-20'>
        {allPoints.map(point => <button disabled={!!winner} key={point.index} id={point.index} onClick={() => submitChoice(point)} className='point-btn w-12 h-12 bg-yellow-400 hover:bg-yellow-500'></button>)}
      </div>
      {!!winner && <button onClick={resetGame} className='play-btn block bg-cyan-500 text-white'>Play again</button>}
      {!winner && <button onClick={resetGame} className='play-btn block bg-white hover:bg-cyan-500 text-cyan-700 hover:text-white border border-cyan-500 hover:border-transparent'>Retry</button>}
    </div>
  );
}

const mapPropsToState = (state = { oPoints: [], xPoints: [], turn: 'o' }) => {
  return {
    turn: state.turn,
    oPoints: state.oPoints,
    xPoints: state.xPoints,
    winner: state.winner
  }
}
export default connect(mapPropsToState)(App);
