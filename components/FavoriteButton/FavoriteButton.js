import styled from "styled-components";
import Star from "@/public/assets/star.svg";
export function FavoriteButton({ isFavorite, onToggle, slug }) {
  return (
    <StyledStar
      $isFavorite={isFavorite}
      alt="star"
      onClick={() => onToggle(slug)}
      src="/assets/star.svg"
      width={24}
      height={24}
    />
  );
}

const StyledStar = styled(Star)`
  fill: ${(props) => (props.$isFavorite ? "red" : "none")};
`;
