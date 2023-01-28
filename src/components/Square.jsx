export default function Square({ value, onSquareClick, players }) {
  return (
    <button
      style={
        value === players[0]
          ? {
              backgroundColor: "green",
              color: "white",
            }
          : value === players[1]
          ? {
              backgroundColor: "#ffbb00",
              color: "white",
            }
          : {}
      }
      onClick={onSquareClick}
      className="square"
    >
      {value}
    </button>
  );
}
