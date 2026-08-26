"use-client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

export default function Navigation() {
  const pathname = usePathname(); // z.B. "/art-pieces"

  const links = [
    { href: "/", label: "Spotlight" },
    { href: "/art-pieces", label: "Art-Pieces" },
    { href: "/favorites", label: "Favorites" },
  ];

  return (
    <StyledNav>
      {links.map((link) => (
        <StyledLink
          key={link.href}
          href={link.href}
          $active={pathname === link.href}
        >
          {link.label}
        </StyledLink>
      ))}
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
  color: ${(props) => (props.$active ? "#ffffff" : "#e8e6e3")};
  font-weight: ${(props) => (props.$active ? "700" : "400")};
  text-decoration: none;
  font-size: 1.5rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  transition: color 0.15s ease;

  &:hover {
    color: #ffffff;
  }
`;
