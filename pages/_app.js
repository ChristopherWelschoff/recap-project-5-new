import GlobalStyle from "../styles";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";

  const [art, setArt] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false);
  const [favoriteArt, setfavoriteArt] = useState([]);

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

  function handleToggleFavorite(slug) {
    if (favoriteArt.find((piece) => piece.slug === slug)) {
      setfavoriteArt(favoriteArt.filter((piece) => piece.slug !== slug));
    } else {
      setfavoriteArt([
        ...favoriteArt,
        art.find((piece) => piece.slug === slug),
      ]);
    }
  }
  console.log(favoriteArt);

  return (
    <>
      <GlobalStyle />
      <Component
        favoriteArt={favoriteArt}
        art={art}
        isLoading={isLoading}
        error={error}
        onToggle={handleToggleFavorite}
        {...pageProps}
      />
      <Navigation />
    </>
  );
}
