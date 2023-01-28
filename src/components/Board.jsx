import { useState } from "react";
import Square from "./Square";
import Players from "./Players";
export default function Board() {
  const [players, setPlayers] = useState(["X", "O"]);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(players[0]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [counter, setCounter] = useState(0);

  function onSquareClick(i) {
    if (calculateWinner(squares) || squares[i]) return;
    if (!isGameStarted) return;

    const nextSquares = squares.slice();
    nextSquares[i] = turn;
    setSquares(nextSquares);
    turn === players[0] ? setTurn(players[1]) : setTurn(players[0]);
    setCounter(counter + 1);
  }
  const winner = calculateWinner(squares);
  return (
    <>
      <Players
        turn={turn}
        isGameStarted={isGameStarted}
        startGame={setIsGameStarted}
        players={players}
        onSetPlayers={setPlayers}
        onTurn={setTurn}
      />
      {console.log(counter)}
      {winner !== null ? (
        <h1 className="winnerAlert">
          Congratulations {winner === players[0] ? "Player 1" : "Player 2"} is
          the winner!
        </h1>
      ) : counter === 9 ? (
        <h1 className="winnerAlert">Game Over!</h1>
      ) : (
        <></>
      )}
      <div className="board">
        <div className="board-row">
          <Square
            value={squares[0]}
            players={players}
            onSquareClick={() => onSquareClick(0)}
          />
          <Square
            value={squares[1]}
            players={players}
            onSquareClick={() => onSquareClick(1)}
          />
          <Square
            value={squares[2]}
            players={players}
            onSquareClick={() => onSquareClick(2)}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[3]}
            players={players}
            onSquareClick={() => onSquareClick(3)}
          />
          <Square
            value={squares[4]}
            players={players}
            onSquareClick={() => onSquareClick(4)}
          />
          <Square
            value={squares[5]}
            players={players}
            onSquareClick={() => onSquareClick(5)}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[6]}
            players={players}
            onSquareClick={() => onSquareClick(6)}
          />
          <Square
            value={squares[7]}
            players={players}
            onSquareClick={() => onSquareClick(7)}
          />
          <Square
            value={squares[8]}
            players={players}
            onSquareClick={() => onSquareClick(8)}
          />
        </div>
        <button
          onClick={() => {
            setSquares(Array(9).fill(null));
            setIsGameStarted(false);
            setCounter(0);
          }}
          className="resetBtn"
        >
          Reset
        </button>
      </div>
    </>
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
  for (const square of lines) {
    const [a, b, c] = square;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
