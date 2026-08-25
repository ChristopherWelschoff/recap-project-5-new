import GlobalStyle from "../styles";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";

  const [art, setArt] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false);
  const [favoriteArts, setFavoriteArts] = useLocalStorageState("Favorites", {
    defaultValue: [],
  });
  const [comments, setComments] = useLocalStorageState("Comments", {
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

  function handleAddComment(slug, inputText, date) {
    const isInComments = comments.some((comment) => comment.piece === slug);
    if (isInComments) {
      setComments((prev) =>
        prev.map((comment) =>
          comment.piece !== slug
            ? { ...comment }
            : {
                ...comment,
                comments: [
                  ...comment.comments,
                  { text: inputText, date: date },
                ],
              }
        )
      );
    } else {
      setComments((prev) => [
        ...prev,
        { piece: slug, comments: [{ text: inputText, date: date }] },
      ]);
    }
  }
  return (
    <>
      <GlobalStyle />
     <Navigation />
     <ContentWrapper>
      <Component
        favoriteArts={favoriteArts}
        onToggle={toggleFavoriteArt}
        onAddComment={handleAddComment}
        art={art}
        comments={comments}
        isLoading={isLoading}
        error={error}
        {...pageProps}
      />
      </ContentWrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;
