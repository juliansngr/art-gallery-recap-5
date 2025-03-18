import Image from "next/image";

export default function ArtPiece({ name, image, width, height, artist }) {
  return (
    <>
      <Image src={image} width={width / 5} height={height / 5} />
      <h2>{name}</h2>
      <h4>{artist}</h4>
    </>
  );
}
