import GlobalStyle from "../styles";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";

  const [art, setArt] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false);
  const [favoriteArts, setFavoriteArts] = useLocalStorageState("Favorites", {
    defaultValue: [],
  });

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
      } catch (error) {
        setError(true);
      }
      setisLoading(false);
    }
    fetchArt();
  }, []);

  function toggleFavoriteArt(slug) {
    const isAllreadyFavorite = favoriteArts.some((art) => art.slug === slug);
    const newFavoriteArt = art.find((art) => art.slug === slug);
    if (isAllreadyFavorite) {
      setFavoriteArts(favoriteArts.filter((art) => art.slug !== slug));
    } else {
      setFavoriteArts([...favoriteArts, newFavoriteArt]);
    }
  }
  return (
    <>
      <GlobalStyle />
      <Component
        favoriteArts={favoriteArts}
        onToggle={toggleFavoriteArt}
        art={art}
        isLoading={isLoading}
        error={error}
        {...pageProps}
      />
      <Navigation />
    </>
  );
}
