// PlayerEntry.js adjustments
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../master.css'; // Import your CSS file if it's not already globally imported

function PlayerEntry() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/game', { state: { player1, player2 } });
  };

  return (
    <div className="player-input-container"> {/* Use the adjusted container */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="nice-input" // Apply the nicer input style
          placeholder="Player 1 Name"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
          required
        />
        <input
          type="text"
          className="nice-input" // Apply the nicer input style
          placeholder="Player 2 Name"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
          required
        />
        <button type="submit" className="button-style">Start Game</button>
      </form>
    </div>
  );
}

export default PlayerEntry;
