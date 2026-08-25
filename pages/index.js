import Link from "next/link";
import Image from "next/image";
import { FavoriteButton } from "@/components/FavoriteButton/FavoriteButton";
import { useEffect, useState } from "react";
import styled from "styled-components";

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
    <SpotlightWrapper>
      {!spotlightArt ? (
        isLoading && <p>Loading...</p>
      ) : (
        <div>
          <StyledTitle>
            <ArtistName>{spotlightArt.artist}</ArtistName>

            <FavoriteButton
              isFavorite={isFavorite}
              onToggle={() => onToggle(spotlightArt.slug)}
            />
          </StyledTitle>
          <Link href={`/art-pieces/${spotlightArt.slug}`}>
            <Image
              alt="sptlightArt"
              src={spotlightArt.imageSource}
              width={spotlightArt.dimensions.width}
              height={spotlightArt.dimensions.height}
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
        </div>
      )}
      {error && <p>Error fetching data...</p>}
    </SpotlightWrapper>
  );
}

const SpotlightWrapper = styled.div`
  display: flex;
  max-width: auto;
  margin: 60px auto;
  text-align: left;
`;

const ArtistName = styled.p`
  align-items: center;
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 16px;
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-top: 16px;
`;
