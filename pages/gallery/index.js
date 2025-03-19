import ArtPieces from "@/components/ArtPieces/ArtPieces";
import Layout from "@/components/Layout/Layout";
import { StyledHeading } from "@/components/Spotlight/Spotlight";
import { useArtGalleryContext } from "@/utils/ArtGalleryContext";

export default function GalleryPage() {
  const { data: art, isLoading, error } = useArtGalleryContext();

  return (
    <Layout>
      <StyledHeading>Gallery</StyledHeading>
      <ArtPieces art={art} />
    </Layout>
  );
}
