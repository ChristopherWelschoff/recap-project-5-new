import Image from "next/image";
import Star from "@/public/assets/star.svg";
import styled from "styled-components";

export function FavoriteButton({ isFavorite, onToggle, slug }) {
  return (
    <StyledStar
      $isFavorite={isFavorite}
      onClick={() => onToggle(slug)}
      width={24}
      height={24}
      data-testid={`favorite-button-${slug}`}
    />
  );
}

const StyledStar = styled(Star)`
  fill: ${(props) => (props.$isFavorite ? "#d4af37" : "none")};
  stroke: #e5de0b;
  stroke-width: 1.5;
  cursor: pointer;
  transition: transform 0.15s ease;
  stroke-width: 2;

  &:hover {
    transform: scale(1.15);
  }
`;
