import ArtPiecesList from "@/components/ArtPiecesList/ArtPiecesList";
import { FavoriteButton } from "@/components/FavoriteButton/FavoriteButton";
import styled from "styled-components";
export default function ArtPieces({ favoriteArts, onToggle, art }) {
  return (
    <StyledDiv>
      <h1>Art Gallery</h1>
      <ArtPiecesList
        favoriteArts={favoriteArts}
        onToggle={onToggle}
        fetchedPieces={art}
      />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px auto;
`;
