import ArtPiece from "../ArtPiece/ArtPiece";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

export default function ArtPiecesList({
  favoriteArts,
  onToggle,
  fetchedPieces,
}) {
  return (
    <>
      <ul style={{ listStyleType: "none" }}>
        {fetchedPieces.map((piece) => {
          const isFavorite = favoriteArts.some(
            (fav) => fav.slug === piece.slug
          );
          return (
            <li key={piece.slug}>
              <ArtPiece piece={piece} />
              <FavoriteButton
                isFavorite={isFavorite}
                slug={piece.slug}
                onToggle={onToggle}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
