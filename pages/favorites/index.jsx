import ArtPiecesList from "@/components/ArtPiecesList/ArtPiecesList";
import styled from "styled-components";

export default function Favorites({ favoriteArts, onToggle }) {
  return (
    <StyledDiv>
      <h1>Favorites</h1>
      {favoriteArts.length === 0 && <p>No favorites...</p>}
      <ArtPiecesList
        fetchedPieces={favoriteArts}
        favoriteArts={favoriteArts}
        onToggle={onToggle}
      />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px auto;
`;
