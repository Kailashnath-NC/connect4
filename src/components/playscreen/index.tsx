import { useState } from "react";
import Board from "../board";
import Notice from "../notice";
import { COLUMNS, ROWS } from "../../assets/boardDimension";

export default function PlayScreen() {
  const [winner, setWinner] = useState<0 | 1 | 2>(0);
  const [board, setBoard] = useState<number[][]>(
    Array.from({ length: ROWS }, () => Array(COLUMNS).fill(0))
  );

  function updateBoard(newboard: number[][]) {
    setBoard(newboard);
  }
  function updateWinner(player: 0 | 1 | 2 = 0) {
    setWinner(player);
  }

  return (
    <div className="playscreen">
      <div className="board-wrapper">
        <Board
          board={board}
          updateBoard={updateBoard}
          winner={winner}
          updateWinner={updateWinner}
        />
      </div>
      <Notice
        winner={winner}
        resetWinner={updateWinner}
        updateBoard={updateBoard}
      />
    </div>
  );
}
