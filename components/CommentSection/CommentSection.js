import { useArtGalleryContext } from "@/utils/ArtGalleryContext";
import CommentDisplay from "../CommentDisplay.js/CommentDisplay";
import AddComment from "../AddComment/AddComment";
import styled from "styled-components";

export default function CommentSection({ slug }) {
  const { comments, handleAddComment } = useArtGalleryContext();
  return (
    <>
      <StyledHeadingSmall>Comments:</StyledHeadingSmall>
      <AddComment slug={slug} handleAddComment={handleAddComment} />
      <CommentDisplay comments={comments} slug={slug} />
    </>
  );
}

export const StyledHeadingSmall = styled.h3`
letter-spacing: 0.3px;
font-weight: 400;
margin-top: 4rem;
`;