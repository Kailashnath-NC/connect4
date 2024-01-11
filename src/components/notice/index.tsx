import { COLUMNS, ROWS } from "../../assets/boardDimension";

export default function Notice({
  winner,
  resetWinner,
  updateBoard,
}: {
  winner: 0 | 1 | 2;
  resetWinner(reset?: 0): void;
  updateBoard(newBoard: number[][]): void;
}) {
  function handlePlayAgain() {
    const newBoard = Array.from({ length: ROWS }, () => Array(COLUMNS).fill(0));
    updateBoard(newBoard);
    resetWinner();
  }
  return (
    <div
      className="notice"
      style={{ visibility: `${winner === 0 ? "hidden" : "visible"}` }}
    >
      <span>Player {winner} has won!!🎉</span>
      <button onClick={handlePlayAgain}>Play Again</button>
    </div>
  );
}
