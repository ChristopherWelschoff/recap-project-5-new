import Link from "next/link";
export default function Navigation() {
  return (
    <nav>
   
      <p>
        <Link href="/">Spotlight</Link>
      </p>
      <p>
        <Link href="/art-pieces">Art-Pieces</Link>
      </p>
    </nav>
  );
}
