import { useArtGalleryContext } from "@/utils/ArtGalleryContext";
import { useState } from "react";
import styled from "styled-components";

import Heart from "@/public/heart.svg";

const StyledButton = styled.button`
  all: unset;
  border-radius: 5px;
  padding: 5px 5px;
  align-self: flex-end;
  color: var(--on-surface);
  & svg {
    color: ${(props) => (props.$isLiked ? "var(--liked)" : "var(--on-surface)")};
    fill: ${(props) => (props.$isLiked ? "var(--liked)" : "")};
    transform: scale(1.3);
  }
`;

export default function FavoriteButton({ slug }) {
  const [isHovering, setIsHovering] = useState(false);

  const { likedArtSlugs, handleLike, handleRemoveLike } =
    useArtGalleryContext();

  return (
    <>
      <StyledButton
        $isLiked={likedArtSlugs.includes(slug)}
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
        onClick={() => {
          // console.log(slug);
          if (likedArtSlugs.includes(slug)) {
            handleRemoveLike(slug);
          } else {
            handleLike(slug);
          }
        }}
      >
        {likedArtSlugs.includes(slug) ? (
          // isHovering ? (
          //   "You sure?"
          // ) : 
          (
            <Heart />
          )
        ) : (
          <Heart />
        )}
      </StyledButton>
    </>
  );
}
