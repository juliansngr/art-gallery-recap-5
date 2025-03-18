import Image from "next/image";
import { useArtGalleryContext } from "../utils/ArtGalleryContext";

export default function Spotlight() {
  const { data, isLoading } = useArtGalleryContext();

  if (isLoading) {
    return (
      <h1>
        Es lädt noch, habe Geduld, wir sind gleich für Sie da! Nur noch einen
        kleinen Augenblick noch bitte :-D Dieser Text ist dazu da, die Wartezeit
        zu überbrücken. Abgesehen davon, hat dieser Text keine weitere
        Bedeutung. Haben Sie heute denn schon genug getrunken? Ein
        durchschnittlicher Erwachsener sollte täglich ca 2,5L trinken. Nutzen
        Sie die Zeit und tun Sie sich was gutes! Prost! Cheers! Skål! Mensch, da
        bekomm ich ja gleich Lust mitzutrinken!
      </h1>
    );
  }

  function generateRandomNumber() {
    return Math.floor(Math.random() * data.length);
  }

  const randomArtPiece = data[generateRandomNumber()];

  return (
    <>
      <h2>Spotlight</h2>
      <p>
        Have you seen this awesome new art piece by{" "}
        <b>{randomArtPiece.artist}</b>? NO? Me neither. So here it is:
      </p>
      <Image
        src={randomArtPiece.imageSource}
        width={randomArtPiece.dimensions.width / 5}
        height={randomArtPiece.dimensions.height / 5}
        alt={randomArtPiece.slug}
      />
      <p>{randomArtPiece.artist}</p>
    </>
  );
}
