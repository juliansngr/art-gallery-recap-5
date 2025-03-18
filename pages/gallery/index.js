import ArtPieces from "@/components/ArtPieces/ArtPieces";
import Layout from "@/components/Layout/Layout";
import { useArtGalleryContext } from "@/utils/ArtGalleryContext";

export default function GalleryPage() {
  const { data: art, isLoading, error } = useArtGalleryContext();

  return (
    <Layout>
      <h1>Gallery</h1>
      <ArtPieces art={art} />
    </Layout>
  );
}
