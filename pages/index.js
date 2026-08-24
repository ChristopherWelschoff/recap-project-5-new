import { useEffect, useState } from "react";
import Image from "next/image";


export default function HomePage() {
  const URL = "https://example-apis.vercel.app/api/art";

  const [art, setArt] = useState();
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(false);
  const [spotlightArt, setSpotlightArt] = useState(art);

  useEffect(() => {
    async function fetchArt() {
      setisLoading(true);
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error("HTTP-Fehler");
        }
        const data = await response.json();
        setArt(data);
        setSpotlightArt(getRandomArt(data));
      } catch (error) {
        setError(true);
      }
      setisLoading(false);
    }
    fetchArt();
  }, []);

  function getRandomArt(artArray) {
    const randomArtIndex = Math.floor(Math.random() * artArray.length);
    return artArray[randomArtIndex];
  }

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>{spotlightArt.artist}</p>
          <Image
            src={spotlightArt.imageSource}
            width={spotlightArt.dimensions.width}
            height={spotlightArt.dimensions.height}
          />
        </div>
      )}
      <p>{error ? "Error fetching data..." : ""}</p>
    </div>
  );
}


