import ArtPiece from "../ArtPiece/ArtPiece";

export default function ArtPiecesList({favoriteArt, onToggle, fetchedPieces }) {
  return (
    <>
      <ul style={{ listStyleType: "none" }}>
        {fetchedPieces.map((piece) => (
          <li key={piece.slug}>
            <ArtPiece favoriteArt={favoriteArt} onToggle={onToggle} piece={piece} />
          </li>
        ))}
      </ul>
    </>
  );
}
