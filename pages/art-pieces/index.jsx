import ArtPiecesList from "@/components/ArtPiecesList/ArtPiecesList";
import { FavoriteButton } from "@/components/FavoriteButton/FavoriteButton";
export default function ArtPieces({ favoriteArts, onToggle, art }) {
  return (
    <>
      <h1>Art Gallery</h1>
      <ArtPiecesList favoriteArts={favoriteArts} onToggle={onToggle} fetchedPieces={art} />
    </>
  );
}
