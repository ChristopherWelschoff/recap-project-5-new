import Link from "next/link";
import Image from "next/image";

export default function HomePage({ art, isLoading, error }) {
  const spotlightArt = art.length !== 0 ? getRandomArt(art) : {};

  function getRandomArt(artArray) {
    const randomArtIndex = Math.floor(Math.random() * artArray.length);
    return artArray[randomArtIndex];
  }

  return (
    <div>
      {art.length === 0 ? (
        isLoading && <p>Loading...</p>
      ) : (
        <div>
          <p>{spotlightArt.artist}</p>
          <Link href={`/art-pieces/${spotlightArt.slug}`}>
            <Image
              src={spotlightArt.imageSource}
              width={spotlightArt.dimensions.width}
              height={spotlightArt.dimensions.height}
            />
          </Link>
        </div>
      )}
      {error && <p>Error fetching data...</p>}
    </div>
  );
}
