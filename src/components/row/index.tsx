import Cell from "../cell";

export default function Row({
  row,
  rIndex,
  playTurn,
}: {
  row: number[];
  rIndex: number;
  playTurn(index: number): void;
}) {
  return (
    <div className="row">
      {row.map((cell, cIndex) => (
        <Cell
          key={rIndex + "" + cIndex}
          cellData={cell}
          cIndex={cIndex}
          playTurn={playTurn}
        />
      ))}
    </div>
  );
}
