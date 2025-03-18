import ArtPieces from "@/components/ArtPieces/ArtPieces";
import { useArtGalleryContext } from "@/utils/ArtGalleryContext";

export default function GalleryPage() {
const {data: art, isLoading, error} = useArtGalleryContext();

if(isLoading) {
    return <h1>🖼️ Loading... </h1>
}

return <main>
<h1>Gallery</h1>
<ArtPieces art={art} />

</main>



}