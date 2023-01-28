export default function Players({
  isGameStarted,
  turn,
  startGame,
  players,
  onSetPlayers,
  onTurn,
}) {
  return (
    <form className="players">
      <div>
        <label
          style={
            turn === players[0]
              ? {
                  backgroundColor: "yellow",
                  color: "black",
                  fontWeight: "bold",
                }
              : {}
          }
          className="player1"
          htmlFor="player1"
        >
          Player 1 :
        </label>

        <input
          readOnly={isGameStarted ? true : false}
          id="player1"
          name="player1"
          className="player1"
          onChange={(e) => {
            onSetPlayers([e.target.value, players[1]]);
            onTurn(e.target.value);
          }}
        />
        <label
          style={
            turn === players[1]
              ? {
                  backgroundColor: "yellow",
                  color: "black",
                  fontWeight: "bold",
                }
              : {}
          }
          className="player2"
          htmlFor="player2"
        >
          Player 2 :{" "}
        </label>
        <input
          readOnly={isGameStarted ? true : false}
          name="player2"
          className="player2"
          onChange={(e) => onSetPlayers([players[0], e.target.value])}
        />
      </div>
      <input
        className="startBtn"
        type="button"
        value="Start"
        onClick={() => startGame(true)}
      />
    </form>
  );
}
