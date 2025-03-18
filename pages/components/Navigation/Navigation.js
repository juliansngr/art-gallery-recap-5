import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <Link href={"/"}>Spotlight</Link>
      <Link href={"/gallery"}>Gallery</Link>
    </nav>
  );
}
