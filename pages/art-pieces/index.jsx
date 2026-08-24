import ArtPiecesList from "@/components/ArtPiecesList/ArtPiecesList";

export default function ArtPieces({ favoriteArt, art, onToggle }) {
  return (
    <>
      <h1>Art Gallery</h1>
      <ArtPiecesList favoriteArt={favoriteArt}  onToggle={onToggle} fetchedPieces={art} />
    </>
  );
}
