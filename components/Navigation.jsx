import Link from "next/link";
export default function Navigation() {
  return (
    <nav>
      {" "}
      <p>
        <Link href="/">Home</Link>
      </p>
      <p>
        {" "}
        <Link href="/Spotlight">Spotlight</Link>
      </p>
      <p>
        <Link href="/Gallery">Gallery</Link>
      </p>
    </nav>
  );
}
