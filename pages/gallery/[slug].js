import { useArtGalleryContext } from "@/utils/ArtGalleryContext";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ChevronLeft from "@/public/chevron-left.svg";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import ArtPiece from "@/components/ArtPiece/ArtPiece";

export default function ArtPieceDetail() {
  const router = useRouter();
  console.log(router);
  const { slug } = router.query;
  const { data: art } = useArtGalleryContext();

  const artPiece = art.find((painting) => painting.slug === slug);

  const {
    slug: openedSlug,
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

      <ArtPiece
        slug={openedSlug}
        name={name}
        image={image}
        width={dimensions.width}
        height={dimensions.height}
        artist={artist}
        year={year}
        genre={genre}
      />
    </>
  );
}
