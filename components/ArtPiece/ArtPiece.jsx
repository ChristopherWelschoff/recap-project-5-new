import Image from "next/image";
import Link from "next/link";
export default function ArtPiece({ piece }) {
  return (
    <>
      <Link href={`/art-pieces/${piece.slug}`}>
        <Image
          src={piece.imageSource}
          width={piece.dimensions.width}
          height={piece.dimensions.height}
          alt={piece.name}
          style={{ width: "100%", height: "auto" }}
        />
      </Link>

      <h2>{piece.name}</h2>
      <p>by {piece.artist}</p>
    </>
  );
}
