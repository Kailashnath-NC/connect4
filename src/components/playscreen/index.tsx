import { useState } from "react";
import Board from "../board";

const ROWS = 6,
  COLUMNS = 7;
export default function PlayScreen() {
  const [board, setBoard] = useState<number[][]>(
    Array(ROWS).fill(Array(COLUMNS).fill(0))
  );

  function updateBoard(newBoard: number[][]) {
    setBoard(newBoard);
  }

  return (
    <div className="playscreen">
      <Board board={board} updateBoard={updateBoard} ROWS={ROWS} />
      <div className="temp"></div>
    </div>
  );
}
