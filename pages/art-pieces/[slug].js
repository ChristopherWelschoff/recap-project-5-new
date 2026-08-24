import Image from "next/image";
import { useRouter } from "next/router";
const URL = "https://example-apis.vercel.app/api/art";

export default function ArtPieceDetail({ piece }) {
  const router = useRouter();
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

async function fetchAllArt() {
  const response = await fetch(URL);
  return await response.json();
}

export async function getStaticPaths() {
  const art = await fetchAllArt();

  const paths = art.map((piece) => ({
    params: { slug: piece.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const art = await fetchAllArt();

  const piece = art.find((p) => p.slug === params.slug);

  return {
    props: { piece },
  };
}
