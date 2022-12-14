import './App.css';
import BoardUI from './Components/Board/Board';
import { useState } from 'react';

import Info from './Components/Info/Info'

function App() {

const [resetGame, setResetGame] = useState(false);
const[winner , setWinner] = useState('');

const resetBoard = () => {
  setResetGame(true);
}


  return (
    <div className="App">
      <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
                <div className='winner-text'>{winner}</div>
                
                <BoardUI resetGame={resetGame} setResetGame={setResetGame} winner={winner} 
                    setWinner={setWinner} />
                  <button onClick={() => resetBoard()}>
                      Reset Board
                  </button>
                <Info />
            </div>
    </div>
  );
}

export default App;
