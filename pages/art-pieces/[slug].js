import Image from "next/image";
import { useRouter } from "next/router";

export default function ArtPieceDetail({ art }) {
  const router = useRouter();
  const { slug } = router.query;
  const piece = art.find((p) => p.slug === slug);
  if (!piece) return <p>Loading ...</p>;
  return (
    <div>
      <h1>{piece.name}</h1>
      <h2>{piece.year}</h2>
      <h3>{piece.genre}</h3>
      <p>by {piece.artist}</p>

      <Image
        src={piece.imageSource}
        width={piece.dimensions.width}
        height={piece.dimensions.height}
      />
      <button onClick={() => router.push("/art-pieces")}>Back</button>
    </div>
  );
}
