import Link from "next/link";
export default function Navigation() {
  return (
    <nav>
      {" "}
      <Link href="/">Home</Link>
      <br />
      <Link href="/Spotlight">Spotlight</Link>
      <br />
      <Link href="/Gallery">Gallery</Link>
    </nav>
  );
}
