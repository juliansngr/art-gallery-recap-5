import { useArtGalleryContext } from "@/utils/ArtGalleryContext";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import ArtPiece from "../ArtPiece/ArtPiece";
import { useState } from "react";
import styled from "styled-components";

export default function Spotlight() {
  const { data } = useArtGalleryContext();

  function generateRandomNumber() {
    return Math.floor(Math.random() * data.length);
  }

  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const randomArtPiece = data[randomNumber];

  return (
    <>
      <StyledHeading>Spotlight</StyledHeading>
      <StyledBody>
        Have you seen this awesome new art piece<br/> by{" "}
        <StyledArtistBold color={randomArtPiece.colors[3]}>{randomArtPiece.artist}</StyledArtistBold>? NO? Me neither. So here it is:
      </StyledBody>
      <ArtPiece
        slug={randomArtPiece.slug}
        name={randomArtPiece.name}
        image={randomArtPiece.imageSource}
        width={randomArtPiece.dimensions.width}
        height={randomArtPiece.dimensions.height}
        // artist={randomArtPiece.artist}
      />
    </>
  );
}

export const StyledHeading = styled.h1`
align-self: center;
`;
const StyledBody = styled.p`
font-weight: 300;
align-self: center;
`;

const StyledArtistBold = styled.b`
font-weight: 700;
letter-spacing: 0.3px;
color: ${({color}) => color};
`;