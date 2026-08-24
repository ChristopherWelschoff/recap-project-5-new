import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  return (
    <nav>
      <button onClick={() => router.push("/Spotlight")}>Spotlight</button>
      <button onClick={() => router.push("/")}>Home</button>
      <button onClick={() => router.push("/Gallery")}>Gallery</button>
    </nav>
  );
}
