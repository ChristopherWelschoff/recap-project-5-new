import ArtPiece from "../ArtPiece/ArtPiece";

export default function ArtPiecesList({ fetchedPieces }) {
  return (
    <>
      <ul style={{ listStyleType: "none" }}>
        {fetchedPieces.map((piece) => (
          <li key={piece.slug}>
            <ArtPiece piece={piece} />
          </li>
        ))}
      </ul>
    </>
  );
}
