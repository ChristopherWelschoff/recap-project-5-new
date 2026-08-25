import Image from "next/image";
import { FavoriteButton } from "@/components/FavoriteButton/FavoriteButton";
import { useEffect, useState } from "react";

function getRandomArt(artArray) {
  const randomArtIndex = Math.floor(Math.random() * artArray.length);
  return artArray[randomArtIndex];
}

export default function HomePage({
  onToggle,
  art,
  isLoading,
  error,
  favoriteArts,
}) {
  const [spotlightArt, setSpotlightArt] = useState(null);

  useEffect(() => {
    if (art.length !== 0) {
      setSpotlightArt(getRandomArt(art));
    }
  }, [art]);

  const isFavorite =
    spotlightArt && favoriteArts.some((fav) => fav.slug === spotlightArt.slug);

  return (
    <div>
      {!spotlightArt ? (
        isLoading && <p>Loading...</p>
      ) : (
        <div>
          <p>{spotlightArt.artist}</p>
          <Image
            src={spotlightArt.imageSource}
            width={spotlightArt.dimensions.width}
            height={spotlightArt.dimensions.height}
          />
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={() => onToggle(spotlightArt.slug)}
          />
        </div>
      )}
      {error && <p>Error fetching data...</p>}
    </div>
  );
}
