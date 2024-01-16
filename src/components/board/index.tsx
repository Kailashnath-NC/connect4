import { useEffect, useState } from "react";
import Row from "../row";
import { COLUMNS, ROWS } from "../../assets/boardDimension";

const directions = [
  [
    [0, -1],
    [0, 1],
  ],
  [
    [1, 0],
    // Never occuring case
    // [-1, 0],
  ],
  [
    [1, 1],
    [-1, -1],
  ],
  [
    [1, -1],
    [-1, 1],
  ],
];

export default function Board({
  board,
  updateBoard,
  winner,
  updateWinner,
}: {
  board: number[][];
  updateBoard(newBoard: number[][]): void;
  winner: -1 | 0 | 1 | 2;
  updateWinner(player: -1 | 1 | 2): void;
}) {
  const [currentMove, setCurrentMove] = useState<number[]>([]);
  const [turn, setTurn] = useState(1);

  useEffect(() => {
    function resetWinner() {
      if (winner == 0) setTurn(1);
      setCurrentMove([]);
    }

    return resetWinner();
  }, [winner]);

  useEffect(() => {
    function isDraw(): void {
      if (winner === 0 && board[0].every((topCell) => topCell != 0)) {
        updateWinner(-1);
      }
    }
    return isDraw();
  }, [board, winner, updateWinner]);

  useEffect(() => {
    function checkWinner() {
      const prevTurn = turn == 1 ? 2 : 1;
      directions.forEach((direction) => {
        let count = 1;
        const c4Array: number[][] = [];
        c4Array.splice(0, c4Array.length);
        direction.forEach(([r, c]) => {
          let rowIndex = currentMove[0] + r;
          let colIndex = currentMove[1] + c;
          while (
            rowIndex >= 0 &&
            rowIndex < ROWS &&
            colIndex >= 0 &&
            colIndex < COLUMNS
          ) {
            if (board[rowIndex][colIndex] !== prevTurn) break;
            count++;
            c4Array.push([rowIndex, colIndex]);
            if (count === 4) {
              updateWinner(prevTurn);
              console.log(`player ${prevTurn} has won`);
            }
            rowIndex += r;
            colIndex += c;
          }
        });
        // console.log(c4Array);
      });
    }
    return checkWinner();
  }, [board, currentMove, turn, updateWinner]);

  function columnFilled(cIndex: number): boolean {
    return board[0][cIndex] === 0 ? false : true;
  }

  function playTurn(cIndex: number) {
    if (!columnFilled(cIndex)) {
      let rIndex = 0;
      for (rIndex = 0; rIndex < ROWS; rIndex++) {
        if (board[rIndex][cIndex] !== 0) {
          break;
        }
      }
      const nextRIndex: number = rIndex - 1;
      const newBoard = board.slice();
      newBoard[nextRIndex][cIndex] = turn;
      setCurrentMove([nextRIndex, cIndex]);
      updateBoard(newBoard);
      setTurn(turn === 1 ? 2 : 1);
    }
  }

  return (
    <div className="board">
      {board.map((row, rIndex) => (
        <Row
          key={rIndex}
          row={row}
          rIndex={rIndex}
          playTurn={playTurn}
          winner={winner}
        />
      ))}
    </div>
  );
}
