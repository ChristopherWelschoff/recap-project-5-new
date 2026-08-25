import ArtPiecesList from "@/components/ArtPiecesList/ArtPiecesList";

export default function Favorites({ favoriteArts, onToggle }) {
  return (
    <main>
      <h1>Favorites</h1>
      {favoriteArts.length === 0 && <p>No favorites...</p>}
      <ArtPiecesList
        fetchedPieces={favoriteArts}
        favoriteArts={favoriteArts}
        onToggle={onToggle}
      />
    </main>
  );
}
