import Row from "../row";

export default function Board({
  board,
  // updateBoard,
  ROWS,
}: {
  board: number[][];
  updateBoard(newBoard: number[][]): void;
  ROWS: number;
}) {
  function columnFilled(cIndex: number): boolean {
    return board[0][cIndex] === 0 ? false : true;
  }

  function playTurn(cIndex: number) {
    if (!columnFilled(cIndex)) {
      let rIndex: number;
      for (rIndex = 0; rIndex < ROWS; rIndex++)
        if (board[rIndex][cIndex] !== 0) break;
      // const nextRIndex: number = rIndex - 1;
    }
  }

  return (
    <div className="board">
      {board.map((row) => (
        <Row row={row} playTurn={playTurn} />
      ))}
    </div>
  );
}
