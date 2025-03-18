import { useArtGalleryContext } from "./utils/ArtGalleryContext";

export default function HomePage() {
  const { bilder, data, isLoading } = useArtGalleryContext();
  return (
    <div>
      <h1>{isLoading ? "Lädt Daten" : "Daten sind geladen"}</h1>
    </div>
  );
}
