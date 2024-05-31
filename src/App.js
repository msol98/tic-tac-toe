import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [isOsTurn, setIsOsTurn] = useState(true);
  const [oPoint, setOPoint] = useState([]);
  const [xPoint, setXPoint] = useState([]);
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

  function checkIfWon(pointsArr) {
    const con1 = pointsArr.filter(point => point.x === pointsArr[0].x)?.length === 3;
    if (con1) return true;
    const con2 = pointsArr.filter(point => point.y === pointsArr[0].y)?.length === 3;
    if (con2) return true;
    const con3 = pointsArr.filter(point => point.x + point.y === 2)?.length === 3;
    if (con3) return true;
    const con4 = pointsArr.filter(point => point.x === point.y)?.length === 3;
    return con4;
  }

  function submitChoice(selectedPoint) {
    const selectedBtn = document.getElementById(selectedPoint.index);
    if (!!selectedBtn.innerText) return;
    if (isOsTurn) {
      setOPoint(points => [...points, selectedPoint]);
      selectedBtn.innerText = 'O';
    } else {
      setXPoint(points => [...points, selectedPoint]);
      selectedBtn.innerText = 'X';
    }
  }

  function resetGame() {
    setIsOsTurn(true);
    setOPoint([]);
    setXPoint([]);
    setWinner(null);
    document.querySelectorAll('.point-btn').forEach(btn => btn.innerText = '');
  }

  useEffect(() => {
    if (isOsTurn && oPoint.length >= 3 && checkIfWon(oPoint))
      setWinner('O');
    else if (!isOsTurn && xPoint.length >= 3 && checkIfWon(xPoint))
      setWinner('X');
    else if (oPoint.length + xPoint.length === 9)
      setWinner('Nobody');
    setIsOsTurn(turn => !turn);
  }, [xPoint, oPoint])

  return (
    <div className='pt-28'>
      {!!winner && (<h1 className='text-center text-[22px]'><span className='font-bold'>{winner}</span> won</h1>)}
      {!winner && <h2 className='text-center text-[20px]'><span className='font-bold'>{isOsTurn ? 'O' : 'X'}</span>'s turn</h2>}
      <div className='grid grid-cols-3 w-36 mx-auto mt-20'>
        {allPoints.map(point => <button disabled={!!winner} key={point.index} id={point.index} onClick={() => submitChoice(point)} className='point-btn w-12 h-12 bg-yellow-400 hover:bg-yellow-500'></button>)}
      </div>
      {!!winner && <button onClick={resetGame} className='play-btn block bg-cyan-500 text-white'>Play again!</button>}
      {!winner && <button onClick={resetGame} className='play-btn block bg-white hover:bg-cyan-500 text-cyan-700 hover:text-white border border-cyan-500 hover:border-transparent'>Retry</button>}
    </div>
  );
}

export default App;
