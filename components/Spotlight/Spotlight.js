import { useArtGalleryContext } from "@/utils/ArtGalleryContext";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import ArtPiece from "../ArtPiece/ArtPiece";
import { useState } from "react";

export default function Spotlight() {
  const { data } = useArtGalleryContext();

  function generateRandomNumber() {
    return Math.floor(Math.random() * data.length);
  }

  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const randomArtPiece = data[randomNumber];

  return (
    <>
      <h2>Spotlight</h2>
      <p>
        Have you seen this awesome new art piece by{" "}
        <b>{randomArtPiece.artist}</b>? NO? Me neither. So here it is:
      </p>
      <ArtPiece
        slug={randomArtPiece.slug}
        name={randomArtPiece.name}
        image={randomArtPiece.imageSource}
        width={randomArtPiece.dimensions.width}
        height={randomArtPiece.dimensions.height}
        artist={randomArtPiece.artist}
      />
    </>
  );
}
