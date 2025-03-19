import { useArtGalleryContext } from "@/utils/ArtGalleryContext";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Link from "next/link";
import styled from "styled-components";

export default function ArtPiece({
  href,
  slug,
  name,
  image,
  width,
  height,
  artist,
  year,
  genre,
}) {
  const { likedArtSlugs } = useArtGalleryContext();

  return (
    <StyledArtPieceWrapper $isLiked={likedArtSlugs.includes(slug)}>
      {href ? (
        <StyledLink href={href}>
          <Image
            src={image}
            width={width / 7}
            height={height / 7}
            alt={`${name} from ${artist}`}
          />
          <StyledTitle>{name}</StyledTitle>
          <StyledText>{artist}</StyledText>
          {year && {year}}
          {genre && <StyledText>{genre}</StyledText>}
        </StyledLink>
      ) : (
        <>
          <Image
            src={image}
            width={width / 7}
            height={height / 7}
            alt={`${name} from ${artist}`}
          />
          <StyledTitle>{name} {year && <StyledSmall>{year}</StyledSmall>}</StyledTitle>
          <StyledText><StyledItalic>ARTIST:</StyledItalic> <br />{artist}</StyledText>
          
          {genre && (
            <StyledText>
              <StyledItalic>GENRE:</StyledItalic> <br /> {genre}
            </StyledText>
          )}
        </>
      )}
      <FavoriteButton slug={slug} />
    </StyledArtPieceWrapper>
  );
}

const StyledArtPieceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ $isLiked }) => ($isLiked ? "var(--is-liked)" : "")};
  border-radius: 10px;
  align-items: flex-start;
  padding: 1.5rem;
  gap: 0.8rem;
`;

const StyledLink = styled(Link)`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

const StyledTitle = styled.h2`
  margin: 0;
`;

const StyledText = styled.p`
  margin: 0;
  font-weight: 300;
`;

const StyledItalic = styled.em`
font-size: 12px;
letter-spacing: 0.4px;
`;

const StyledSmall = styled.small`
font-weight: 300;
font-size: 16px;
`;