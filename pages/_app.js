import GlobalStyle from "../styles";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";

  const [art, setArt] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false);

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
  return (
    <>
      <GlobalStyle />
      <Component art={art} isLoading={isLoading} error={error} {...pageProps} />
      <Navigation />
    </>
  );
}
