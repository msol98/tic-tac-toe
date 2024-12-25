import { useEffect, useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { oPlay, reset, xPlay } from './actions/tic-tac-toe';

function App({ dispatch, oPoints, xPoints }) { // todo: highlight the buttons that made winner win the game

  const [isOsTurn, setIsOsTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const allPoints = [
    {
      index: 0,
      x: 0,
      y: 0
    },
    {
      index: 1,
      x: 0,
      y: 1
    },
    {
      index: 2,
      x: 0,
      y: 2
    },
    {
      index: 3,
      x: 1,
      y: 0
    },
    {
      index: 4,
      x: 1,
      y: 1
    },
    {
      index: 5,
      x: 1,
      y: 2
    },
    {
      index: 6,
      x: 2,
      y: 0
    },
    {
      index: 7,
      x: 2,
      y: 1
    },
    {
      index: 8,
      x: 2,
      y: 2
    }
  ]

  function getWinPossibilities(pointsArr) {
    return [
      pointsArr.filter(point => point.x === pointsArr[0].x)?.length === 3,
      pointsArr.filter(point => point.y === pointsArr[0].y)?.length === 3,
      pointsArr.filter(point => point.x + point.y === 2)?.length === 3,
      pointsArr.filter(point => point.x === point.y)?.length === 3
    ];
  }

  function checkIfWon(pointsArr) {
    return getWinPossibilities(pointsArr).some(possibility => possibility == true);
  }

  function submitChoice(selectedPoint) {
    const selectedBtn = document.getElementById(selectedPoint.index);
    if (!!selectedBtn.innerText) return;
    if (isOsTurn) {
      dispatch(oPlay(selectedPoint));
      selectedBtn.innerText = 'O';
    } else {
      dispatch(xPlay(selectedPoint));
      selectedBtn.innerText = 'X';
    }
  }

  function resetGame() {
    setIsOsTurn(true);
    dispatch(reset());
    setWinner(null);
    document.querySelectorAll('.point-btn').forEach(btn => btn.innerText = '');
  }

  useEffect(() => {
    if (isOsTurn && oPoints.length >= 3 && checkIfWon(oPoints))
      setWinner('O');
    else if (!isOsTurn && xPoints.length >= 3 && checkIfWon(xPoints))
      setWinner('X');
    else if (oPoints.length + xPoints.length === 9)
      setWinner('Nobody');
    if (oPoints.length + xPoints.length > 0)
      setIsOsTurn(turn => !turn);
  }, [xPoints, oPoints])

  return (
    <div className='pt-28'>
      {!!winner && (<h1 className='text-center text-[22px]'><span className='font-bold'>{winner}</span> won</h1>)}
      {!winner && <h2 className='text-center text-[20px]'><span className='font-bold'>{isOsTurn ? 'O' : 'X'}</span>'s turn</h2>}
      <div className='grid grid-cols-3 w-36 mx-auto mt-20'>
        {allPoints.map(point => <button disabled={!!winner} key={point.index} id={point.index} onClick={() => submitChoice(point)} className='point-btn w-12 h-12 bg-yellow-400 hover:bg-yellow-500'></button>)}
      </div>
      {!!winner && <button onClick={resetGame} className='play-btn block bg-cyan-500 text-white'>Play again</button>}
      {!winner && <button onClick={resetGame} className='play-btn block bg-white hover:bg-cyan-500 text-cyan-700 hover:text-white border border-cyan-500 hover:border-transparent'>Retry</button>}
    </div>
  );
}

const mapPropsToState = (state = {oPoints: [], xPoints: []}) => {
  return {
    oPoints: state.oPoints,
    xPoints: state.xPoints,
  }
}
export default connect(mapPropsToState)(App);
