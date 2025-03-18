import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 5px;
  padding: 5px 20px;
  border-width: 2px;

  background-color: ${(props) => (props.isLiked ? "#FBCEB1" : "white")};
  border-color: ${(props) => (props.isLiked ? "#fd5c63" : "#636363")};
`;

export default function FavoriteButton({ slug }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const { likedArtSlugs, handleLike, handleRemoveLike } =
    useArtGalleryContext();

  return (
    <>
      <StyledButton
        isLiked={isLiked}
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
        onClick={() => {
          setIsLiked(!isLiked);
        }}
      >
        {isLiked ? (isHovering ? "💔 Noooo" : "❤️ Liked!") : "🖤 Like"}
      </StyledButton>
    </>
  );
}
