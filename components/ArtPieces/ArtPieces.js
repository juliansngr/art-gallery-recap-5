import ArtPiece from "@/components/ArtPiece/ArtPiece";

export default function ArtPieces({ art }) {
  return (
    <ul>
      {art.map((painting) => (
        <li key={painting.slug}>
          <ArtPiece
            name={painting.name}
            image={painting.imageSource}
            width={painting.dimensions.width}
            height={painting.dimensions.height}
            artist={painting.artist}
          />
        </li>
      ))}
    </ul>
  );
}
