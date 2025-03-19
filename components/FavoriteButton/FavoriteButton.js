import { useArtGalleryContext } from "@/utils/ArtGalleryContext";
import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 5px;
  padding: 5px 20px;
  border-width: 2px;
  align-self: flex-end;
  background-color: ${(props) => (props.isLiked ? "#FBCEB1" : "white")};
  border-color: ${(props) => (props.isLiked ? "#fd5c63" : "#636363")};
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
