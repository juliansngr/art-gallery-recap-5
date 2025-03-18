import ArtPiece from "@/components/ArtPiece/ArtPiece";
import Link from "next/link";

export default function ArtPieces({ art }) {
  return (
    <ul>
      {art.map((painting) => (
        <li key={painting.slug}>
          <Link href={`/gallery/${painting.slug}`}>
            <ArtPiece
              name={painting.name}
              image={painting.imageSource}
              width={painting.dimensions.width}
              height={painting.dimensions.height}
              artist={painting.artist}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
