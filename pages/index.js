import Image from "next/image";
import { FavoriteButton } from "@/components/FavoriteButton/FavoriteButton";

export default function HomePage({
  art,
  isLoading,
  error,
  onToggle,
  favoriteArt,
}) {
  const spotlightArt = art.length !== 0 ? getRandomArt(art) : {};

  function getRandomArt(artArray) {
    const randomArtIndex = Math.floor(Math.random() * artArray.length);
    return artArray[randomArtIndex];
  }

  return (
    <>
      {" "}
      <div>
        {art.length === 0 ? (
          isLoading && <p>Loading...</p>
        ) : (
          <div>
            <p>{spotlightArt.artist}</p>
            <Image
              alt="spotlight"
              src={spotlightArt.imageSource}
              width={spotlightArt.dimensions.width}
              height={spotlightArt.dimensions.height}
            />
            <FavoriteButton
              slug={spotlightArt.slug}
              onToggle={onToggle}
              isFavorite={favoriteArt.find(
                (favPiece) => favPiece.slug === spotlightArt.slug
              )}
            />
          </div>
        )}
        {error && <p>Error fetching data...</p>}
      </div>
    </>
  );
}
