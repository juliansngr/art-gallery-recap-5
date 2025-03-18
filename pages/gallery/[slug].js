import { useArtGalleryContext } from "@/utils/ArtGalleryContext";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ChevronLeft from "@/public/chevron-left.svg";

export default function ArtPieceDetail() {
  const router = useRouter();
  console.log(router);
  const { slug } = router.query;
  const { data: art } = useArtGalleryContext();

  const artPiece = art.find((painting) => painting.slug === slug);

  const {
    imageSource: image,
    name,
    artist,
    year,
    genre,
    dimensions,
  } = artPiece;
  return (
    <>
      <Link href="/gallery">
        <button type="button">
          <ChevronLeft />
          gallery
        </button>
      </Link>
      <Image
        src={image}
        width={dimensions.width / 6}
        height={dimensions.height / 6}
        alt={`${name} from ${artist}`}
      />
      <h1>{name}</h1>
      <p> {artist}</p>
      <p> {year}</p>
      <p> {genre}</p>
    </>
  );
}
