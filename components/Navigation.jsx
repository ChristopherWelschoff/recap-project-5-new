import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledNav>
      <StyledLink href="/">Spotlight</StyledLink>
      <StyledLink href="/art-pieces">Art-Pieces</StyledLink>
      <StyledLink href="/favorites">Favorites</StyledLink>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  background: #393941;
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 16px 24px;
  border-bottom: 3px solid white;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
`;

const StyledLink = styled(Link)`
  color: #e8e6e3;
  text-decoration: none;
  font-size: 1.5;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  transition: color 0.15s ease;
`;
