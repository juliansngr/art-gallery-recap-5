import { useArtGalleryContext } from "@/utils/ArtGalleryContext";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Link from "next/link";

export default function ArtPiece({
  href,
  slug,
  name,
  image,
  width,
  height,
  artist,
  year,
  genre,
}) {
  const { likedArtSlugs } = useArtGalleryContext();
  return (
    <>
      <div
        style={{
          backgroundColor: likedArtSlugs.includes(slug) ? "yellow" : "white",
        }}
      >
        {href ? (
          <Link href={href}>
            <Image
              src={image}
              width={width / 5}
              height={height / 5}
              alt={`${name} from ${artist}`}
            />
            <h2>{name}</h2>
            <h4>{artist}</h4>
            {year && <p>{year}</p>}
            {genre && <p>{genre}</p>}
          </Link>
        ) : (
          <>
            <Image
              src={image}
              width={width / 5}
              height={height / 5}
              alt={`${name} from ${artist}`}
            />
            <h2>{name}</h2>
            <h4>{artist}</h4>
            {year && <p>{year}</p>}
            {genre && <p>{genre}</p>}
          </>
        )}
        <FavoriteButton slug={slug} />
      </div>
    </>
  );
}
