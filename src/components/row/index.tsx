import Cell from "../cell";

export default function Row({
  row,
  rIndex,
  playTurn,
  winner,
}: {
  row: number[];
  rIndex: number;
  playTurn(index: number): void;
  winner: 0 | 1 | 2;
}) {
  return (
    <div className="row">
      {row.map((cell, cIndex) => (
        <Cell
          key={rIndex + "" + cIndex}
          cellData={cell}
          cIndex={cIndex}
          playTurn={playTurn}
          winner={winner}
        />
      ))}
    </div>
  );
}
