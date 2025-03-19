import ArtPiece from "@/components/ArtPiece/ArtPiece";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPieces({ art }) {
  return (
    <ul>
      {art.map((painting) => (
        <li key={crypto.randomUUID()}>
          <ArtPiece
            href={`/gallery/${painting.slug}`}
            slug={painting.slug}
            name={painting.name}
            image={painting.imageSource}
            width={painting.dimensions.width}
            height={painting.dimensions.height}
            artist={painting.artist}
          />
        </li>
      ))}
    </ul>
  );
}
