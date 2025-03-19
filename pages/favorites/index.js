import ArtPiece from "@/components/ArtPiece/ArtPiece";
import Layout from "@/components/Layout/Layout";
import { useArtGalleryContext } from "@/utils/ArtGalleryContext";

export default function Favorites() {
  const { likedArtSlugs, data } = useArtGalleryContext();

  const likedArtPieces = data.filter((piece) => {
    return likedArtSlugs.find((slug) => slug === piece.slug);
  });

  return (
    <Layout>
      <ul>
        {likedArtPieces.map((artPiece) => {
          console.log(artPiece);
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
            <li key={openedSlug}>
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
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
