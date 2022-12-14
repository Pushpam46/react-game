import React from 'react'

import './Board.css'

import { useState, useEffect, useRef} from 'react'

function BoardUI({ resetGame, setResetGame, winner, setWinner }) {

  const [turn, setTurn] = useState(0);
  const [data, setData] = useState(['', '', '', '', '', '', '', '', '']);
  const boardRef = useRef(null);

  const draw = (event, index) => {
    // check index and winner set to empty string 
    if (data[index - 1] === '' && winner === '') {
      // check and set turn value 
        const current = turn === 0 ? "X" : "O"
      // set current string to data 
        data[index - 1] = current;
      // set current string to event 
        event.target.innerText = current;
      // set setTurn function and check turn is set to
        setTurn(turn === 0 ? 1 : 0)
    }
  }

  useEffect(() => {
  
    // clear data state 
      setData(['', '', '', '', '', '', '', '', '']);

    // get children of the board 
      const cells = boardRef.current.children

    // clear the board  
      for (let i = 0; i < 9; i++) {
          cells[i].innerText = '';
      }

      // resetGame the player turn to 0 
      setTurn(0);

      // resetGame the player 
      setWinner('');

      // set false to set resetGame data 
      setResetGame(false);

  }, [resetGame, setResetGame, setWinner])


  useEffect(() => {
  
    // Checks the row, condition of winner
    const checkRow = () => {
        let ans = false;
        for (let i = 0; i < 9; i += 3) {
            ans |= (data[i] === data[i + 1] && 
            data[i] === data[i + 2] && 
            data[i] !== '')
        }
        return ans;
    }

    // Checks the col, condition of winner
    const checkCol = () => {
        let ans = false;
        for (let i = 0; i < 3; i++) {
            ans |= (data[i] === data[i + 3] && 
            data[i] === data[i + 6] && 
            data[i] !== '')
        }
        return ans;
    }

    // Checks the diag.., condition of winner
    const checkDiagonal = () => {
        return ((data[0] === data[4] && 
        data[0] === data[8] && data[0] !== '') || 
        (data[2] === data[4] && data[2] === data[6] && 
        data[2] !== ''));
    }

    // Checks condition of winner in all function
    const checkWin = () => {
        return (checkRow() || checkCol() || checkDiagonal());
    }

    // chek for draw in between
    const checkDraw = () => {
        let count = 0;
        data.forEach((cell) => {
            if (cell !== '') {
                count++;
            }
        })
        return count === 9;
    }

    // set winner 
    if (checkWin()) {
        setWinner(turn === 0 ? "Player 2 Wins" : 
        "Player 1 Wins");
    } else if (checkDraw()) {

      // set draw in between
      setWinner("It's a draw");
    }

  })
  

  return (
    <div ref={boardRef} className="board">
        <div className="input input-1" 
            onClick={(e) => draw(e, 1)}></div>
        <div className="input input-2" 
            onClick={(e) => draw(e, 2)}></div>
        <div className="input input-3" 
            onClick={(e) => draw(e, 3)}></div>
        <div className="input input-4" 
            onClick={(e) => draw(e, 4)}></div>
        <div className="input input-5" 
            onClick={(e) => draw(e, 5)}></div>
        <div className="input input-6" 
            onClick={(e) => draw(e, 6)}></div>
        <div className="input input-7" 
            onClick={(e) => draw(e, 7)}></div>
        <div className="input input-8" 
            onClick={(e) => draw(e, 8)}></div>
        <div className="input input-9" 
            onClick={(e) => draw(e, 9)}></div>
    </div>
  )
}

export default BoardUI
