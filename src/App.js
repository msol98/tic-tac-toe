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
    if (isOsTurn) {
      setOPoint(points => [...points, selectedPoint]);
      selectedBtn.innerText = 'O';
    } else {
      setXPoint(points => [...points, selectedPoint]);
      selectedBtn.innerText = 'X';
    }
    setIsOsTurn(turn => !turn);
  }

  useEffect(() => {
    if (oPoint.length >= 3 && checkIfWon(oPoint))
      setWinner('o');
  }, [oPoint]);

  useEffect(() => {
    if (xPoint.length >= 3 && checkIfWon(xPoint))
      setWinner('x');
  }, [xPoint])

  return (
    <div>
      {!!winner && (<>The winner is <h1>{winner}</h1></>)}
      <div className='grid grid-cols-3 gap-4 w-40 mx-auto mt-40'>
        {allPoints.map(point => <button key={point.index} id={point.index} onClick={() => submitChoice(point)} className='w-12 h-12 bg-yellow-500'></button>)}
      </div>
    </div>
  );
}

export default App;
