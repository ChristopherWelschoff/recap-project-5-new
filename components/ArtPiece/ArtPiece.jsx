import Image from "next/image";

export default function ArtPiece({ piece }) {
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
    </>
  );
}
