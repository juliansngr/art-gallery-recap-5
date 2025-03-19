import { useArtGalleryContext } from "@/utils/ArtGalleryContext";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ChevronLeft from "@/public/chevron-left.svg";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import ArtPiece from "@/components/ArtPiece/ArtPiece";
import Layout from "@/components/Layout/Layout";
import CommentSection from "@/components/CommentSection/CommentSection";
import ColorDisplay from "@/components/ColorDisplay/ColorDisplay";

export default function ArtPieceDetail() {
  const router = useRouter();
  // console.log(router);
  const { slug } = router.query;
  const { data: art } = useArtGalleryContext();

  const artPiece = art.find((painting) => painting.slug === slug);
  console.log(artPiece);
  const {
    slug: openedSlug,
    imageSource: image,
    name,
    artist,
    year,
    genre,
    dimensions,
    colors,
  } = artPiece;
  return (
    <Layout>
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
      <ColorDisplay colors={colors} />
      <CommentSection slug={openedSlug} />
    </Layout>
  );
}
