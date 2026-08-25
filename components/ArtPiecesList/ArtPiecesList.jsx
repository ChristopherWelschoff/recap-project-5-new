import ArtPiece from "../ArtPiece/ArtPiece";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import styled from "styled-components";

export default function ArtPiecesList({
  favoriteArts,
  onToggle,
  fetchedPieces,
}) {
  return (
    <>
      <StyledList style={{ listStyleType: "none" }}>
        {fetchedPieces.map((piece) => {
          const isFavorite = favoriteArts.some(
            (fav) => fav.slug === piece.slug
          );
          return (
            <StyledCard key={piece.slug}>
              <ArtPiece piece={piece} />
              <StarWrapper>
                <FavoriteButton
                  isFavorite={isFavorite}
                  slug={piece.slug}
                  onToggle={onToggle}
                />
              </StarWrapper>
            </StyledCard>
          );
        })}
      </StyledList>
    </>
  );
}

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
  list-style: none;
  padding: 24px;
  margin: 0;
`;

const StyledCard = styled.li`
  padding: 10px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: 2px, solid, #e8e6e3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
`;

const StarWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
