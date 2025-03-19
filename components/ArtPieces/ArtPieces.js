import ArtPiece from "@/components/ArtPiece/ArtPiece";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import styled from "styled-components";

export default function ArtPieces({ art }) {
  return (
    <StyledList>
      {art.map((painting) => (
        <li key={painting.slug}>
          <ArtPiece
            href={`/gallery/${painting.slug}`}
            slug={painting.slug}
            name={painting.name}
            image={painting.imageSource}
            width={painting.dimensions.width}
            height={painting.dimensions.height}
            artist={painting.artist}
          />
          {/* <Link href={`/gallery/${painting.slug}`}>
          </Link> */}
        </li>
      ))}
    </StyledList>
  );
}

export const StyledList = styled.ul`
display: flex;
flex-direction: column;
list-style: none;
padding: 0;
gap: 2rem;
`;