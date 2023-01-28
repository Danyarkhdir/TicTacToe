import { useState } from "react";
import Square from "./Square";
export default function Board() {
  const [players, setPlayers] = useState(["X", "O"]);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(players[0]);

  function onSquareClick(i) {
    if (calculateWinner(squares) || squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = turn;
    setSquares(nextSquares);
    turn === players[0] ? setTurn(players[1]) : setTurn(players[0]);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = (turn === players[0] ? "Player 1's" : "Player 2's") + '" Turn :';
  }
  return (
    <>
      <Players players={players} onSetPlayers={setPlayers} onTurn={setTurn} />
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

        <h1>{status}</h1>
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

function Players({ players, onSetPlayers, onTurn }) {
  return (
    <form className="players">
      <div>
        <label className="player1" htmlFor="player1">
          Player 1 :
        </label>
        <input
          id="player1"
          name="player1"
          className="player1"
          onChange={(e) => {
            onSetPlayers([e.target.value, players[1]]);
            onTurn(e.target.value);
          }}
        />
        <label className="player2" htmlFor="player2">
          Player 2 :{" "}
        </label>
        <input
          name="player2"
          className="player2"
          onChange={(e) => onSetPlayers([players[0], e.target.value])}
        />
      </div>
      <input className="startBtn" type="button" value="Start" />
    </form>
  );
}
