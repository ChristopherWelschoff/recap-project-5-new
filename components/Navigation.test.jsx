import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

test("renders navigation links", () => {
  render(<Navigation />);

  expect(screen.getByRole("link", { name: "Spotlight" })).toHaveAttribute(
    "href",
    "/"
  );
  expect(screen.getByRole("link", { name: "Art-Pieces" })).toHaveAttribute(
    "href",
    "/art-pieces"
  );
  expect(screen.getByRole("link", { name: "Favorites" })).toHaveAttribute(
    "href",
    "/favorites"
  );
});
