import React, { useEffect, useState } from 'react';
import './game.css';

const Game = () => {
  const [gridSize, setGridSize] = useState(3);
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [marks, setMarks] = useState({ X: 'X', O: 'O', count: 0 });
  const [board, setBoard] = useState(Array(9).fill(''));

  useEffect(() => {
    paintBoard(gridSize);
  }, [gridSize]);

  const paintBoard = (size) => {
    setBoard(Array(size * size).fill(''));
  };

  const mark = (index) => {
    if (board[index]) return;

    const newBoard = board.slice();
    const currentMark = marks.count % 2 === 0 ? marks.X : marks.O;
    newBoard[index] = currentMark;
    setBoard(newBoard);
    setMarks((prevMarks) => ({ ...prevMarks, count: prevMarks.count + 1 }));

    if (didWin(newBoard, currentMark, gridSize)) {
      const newScores = { ...scores };
      if (currentMark === marks.X) {
        newScores.X += 1;
      } else {
        newScores.O += 1;
      }
      setScores(newScores);
      alert(`${currentMark} has won`);
      updateScores(newScores.X, newScores.O);
      resetBoard();
    } else if (marks.count + 1 === gridSize * gridSize) {
      alert("It's a draw!");
      resetBoard();
    }
  };

  const didWin = (board, mark, size) => {
    const winPatterns = [
      // Horizontal
      ...Array(size).keys().map((i) => Array(size).keys().map((j) => i * size + j)),
      // Vertical
      ...Array(size).keys().map((i) => Array(size).keys().map((j) => j * size + i)),
      // Diagonal
      Array(size).keys().map((i) => i * size + i),
      Array(size).keys().map((i) => (i + 1) * size - (i + 1))
    ];

    return winPatterns.some((pattern) => pattern.every((index) => board[index] === mark));
  };

  const resetBoard = () => {
    setBoard(Array(gridSize * gridSize).fill(''));
    setMarks({ X: 'X', O: 'O', count: 0 });
  };

  const handleRestart = (size) => {
    resetBoard();
    updateScores(0, 0);
    if (size) setGridSize(size);
  };

  const updateScores = (X, O) => {
    document.querySelector("#scoreboard #player1").innerHTML = X;
    document.querySelector("#scoreboard #player2").innerHTML = O;
  };

  return (
    <div>
      <table id="scoreboard" align="center">
        {/* <h1>Welcome to Tic-Tac-Toe</h1>
        <br></br> */}
        <tbody>
          <tr>
            <td> Player 1 </td>
            <td width={30}> &nbsp; </td>
            <td> Player 2 </td>
          </tr>
          <tr>
            <td className="score" id="player1">0</td>
            <td> &nbsp; </td>
            <td className="score" id="player2">0</td>
          </tr>
        </tbody>
      </table>
      <div id="placeholder">
        <table id="tic-tac-toe" align="center">
          <tbody>
            {Array(gridSize).fill(null).map((_, row) => (
              <tr key={row}>
                {Array(gridSize).fill(null).map((_, col) => (
                  <td key={col} onClick={() => mark(row * gridSize + col)}>{board[row * gridSize + col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={() => handleRestart()}>Reset</button>
      <select onChange={(e) => handleRestart(parseInt(e.target.value))}>
        <option value={2}>2 X 2</option>
        <option value={3} selected>3 X 3</option>
        <option value={4}>4 X 4</option>
        <option value={5}>5 X 5</option>
        <option value={6}>6 X 6</option>
      </select>
    </div>
  );
};

export default Game;