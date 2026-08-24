import Image from "next/image";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

export default function ArtPiece({ favoriteArt, piece, onToggle }) {
  return (
    <>
      <Image
        src={piece.imageSource}
        width={piece.dimensions.width}
        height={piece.dimensions.height}
        alt={piece.name}
        style={{ width: "100%", height: "auto" }}
      />
      <h2>{piece.name}</h2>
      <p>by {piece.artist}</p>
      <FavoriteButton
        isFavorite={favoriteArt.find(
          (favPiece) => favPiece.slug === piece.slug
        )}
        onToggle={onToggle}
        slug={piece.slug}
      />
    </>
  );
}
