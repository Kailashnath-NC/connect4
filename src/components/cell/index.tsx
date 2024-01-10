export default function Cell({
  cellData,
  cIndex,
  playTurn,
}: {
  cellData: number;
  cIndex: number;
  playTurn(index: number): void;
}) {
  function handleTurn() {
    playTurn(cIndex);
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
