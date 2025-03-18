import { useArtGalleryContext } from "@/utils/ArtGalleryContext";
import { useRouter } from "next/router";

export default function ArtPieceDetail() {
    const router = useRouter();

    const {data: art} = useArtGalleryContext();

    const {}
    console.log(router);
  return (
    <>
      <h1></h1>
    </>
  );
}
