import ArtPiecesList from "@/components/ArtPiecesList/ArtPiecesList";

export default function ArtPieces({art}) {
  return (
    <>
      <h1>Art Gallery</h1>
      <ArtPiecesList fetchedPieces={art} />
    </>
  );
}
