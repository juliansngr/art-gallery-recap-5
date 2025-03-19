import { useArtGalleryContext } from "@/utils/ArtGalleryContext";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ChevronLeft from "@/public/chevron-left.svg";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import ArtPiece from "@/components/ArtPiece/ArtPiece";
import Layout from "@/components/Layout/Layout";
<<<<<<< HEAD
import styled from "styled-components";
=======
import CommentSection from "@/components/CommentSection/CommentSection";
>>>>>>> main

export default function ArtPieceDetail() {
  const router = useRouter();
  // console.log(router);
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
    <Layout>
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
      <BasicLink href="/gallery">
        <BackButton type="button">
          <ChevronLeft />
          Gallery
        </BackButton>
      </BasicLink>

      <CommentSection slug={openedSlug} />
    </Layout>
  );
}

const BackButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-top: 1rem;
  border-radius: 5px;
  padding: 5px 10px 5px 5px;
  color: var(--on-surface);
  background-color: transparent;
  &:hover {
    background-color: var(--hover-button);
  }
`;

export const BasicLink = styled(Link)`
  text-decoration: none;
`;
