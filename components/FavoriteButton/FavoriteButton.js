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
    />
  );
}

const StyledStar = styled(Star)`
  fill: ${(props) => (props.$isFavorite ? "red" : "none")};
`;
