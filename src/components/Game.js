import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Board from './Board';

function Game() {
  const navigate = useNavigate();
  const location = useLocation();
  // Extract player names from the location state
  const { player1 = 'Player 1', player2 = 'Player 2' } = location.state || {};
  const [isXNext, setIsXNext] = useState(true); // Tracks whether it's X's turn
  const [winner, setWinner] = useState(null);
  const [boardState, setBoardState] = useState(Array(9).fill(null)); // Tracks the state of the board

  const resetGame = () => {
    setIsXNext(true); // Resets to X's turn
    setWinner(null);
    setBoardState(Array(9).fill(null)); // Clears the board
  };

  const goHome = () => navigate('/');

  return (
    <div className="game">
      <div className="game-info">
        {/* Adjusted to display player names instead of 'X' or 'O' */}
        <h2>{winner ? `Winner: ${winner}` : `Next player: ${isXNext ? player1 : player2}`}</h2>
      </div>
      <Board
        boardState={boardState}
        setBoardState={setBoardState}
        isXNext={isXNext}
        setIsXNext={setIsXNext}
        setWinner={setWinner}
      />
      <div className="game-controls">
        <button onClick={resetGame} className="button-style">Restart Game</button>
        <button onClick={goHome} className="button-style">Back to Home</button>
      </div>
    </div>
  );
}

export default Game;
