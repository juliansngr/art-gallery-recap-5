import { useArtGalleryContext } from "@/utils/ArtGalleryContext";
import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  all: unset;
  border-radius: 5px;
  padding: 5px 20px;
  align-self: flex-end;
  color: var(--on-surface);
  background-color: ${(props) => (props.isLiked ? "var(--liked)" : "transparent")};
`;

export default function FavoriteButton({ slug }) {
  const [isHovering, setIsHovering] = useState(false);

  const { likedArtSlugs, handleLike, handleRemoveLike } =
    useArtGalleryContext();

  return (
    <>
      <StyledButton
        isLiked={likedArtSlugs.includes(slug)}
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
        onClick={() => {
          console.log(slug);
          if (likedArtSlugs.includes(slug)) {
            handleRemoveLike(slug);
          } else {
            handleLike(slug);
          }
        }}
      >
        {likedArtSlugs.includes(slug)
          ? isHovering
            ? "💔 Noooo"
            : "❤️ Liked!"
          : "🖤 Like"}
      </StyledButton>
    </>
  );
}
