export default function Cell({
  cellData,
  cIndex,
  playTurn,
  winner,
}: {
  cellData: number;
  cIndex: number;
  playTurn(index: number): void;
  winner: 0 | 1 | 2;
}) {
  function handleTurn() {
    if (winner === 0) playTurn(cIndex);
  }

  return (
    <div className="cell-wrapper">
      <div
        className="cell"
        onClick={handleTurn}
        style={{
          background:
            cellData === 0 ? "transparent" : cellData === 1 ? "red" : "green",
        }}
      ></div>
    </div>
  );
}
