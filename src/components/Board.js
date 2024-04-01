import React, { useState } from 'react';
import Square from './Square';

function Board({ boardState, setBoardState, isXNext, setIsXNext, setWinner }) {
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (i) => {
        const squaresCopy = boardState.slice();
        if (calculateWinner(squaresCopy) || squaresCopy[i]) {
          return; // Ignore click if game is won or square is filled
        }
        squaresCopy[i] = isXNext ? 'X' : 'O';
        setBoardState(squaresCopy);
        setIsXNext(!isXNext); // Toggle turns
        setWinner(calculateWinner(squaresCopy));
      };

  // Render a square
  const renderSquare = (i) => (
    <Square value={boardState[i]} onClick={() => handleClick(i)} />
  );

  // Calculate the status message using isXNext
  const winner = calculateWinner(boardState);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">{[0, 1, 2].map(renderSquare)}</div>
      <div className="board-row">{[3, 4, 5].map(renderSquare)}</div>
      <div className="board-row">{[6, 7, 8].map(renderSquare)}</div>
    </div>
  );
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
export default Board;
