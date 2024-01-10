import Row from "../row";

export default function Board({
  board,
  updateBoard,
  ROWS,
}: {
  board: number[][];
  updateBoard(newBoard: number[][]): void;
  ROWS: number;
}) {
  const turn = 1;
  function columnFilled(cIndex: number): boolean {
    return board[0][cIndex] === 0 ? false : true;
  }

  function playTurn(cIndex: number) {
    if (!columnFilled(cIndex)) {
      let rIndex: number;
      for (rIndex = 0; rIndex < ROWS; rIndex++) {
        if (board[rIndex][cIndex] !== 0) {
          break;
        }
      }
      const nextRIndex: number = rIndex - 1;
      const newBoard = board.slice();
      newBoard[nextRIndex][cIndex] = turn;
      updateBoard(newBoard);
    }
  }

  return (
    <div className="board">
      {board.map((row, rIndex) => (
        <Row key={rIndex} row={row} rIndex={rIndex} playTurn={playTurn} />
      ))}
    </div>
  );
}
