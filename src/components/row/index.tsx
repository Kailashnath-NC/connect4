import Cell from "../cell";

export default function Row({
  row,
  playTurn,
}: {
  row: number[];
  playTurn(index: number): void;
}) {
  return (
    <div className="row">
      {row.map((cell, cIndex) => (
        <Cell cellData={cell} cIndex={cIndex} playTurn={playTurn} />
      ))}
    </div>
  );
}
