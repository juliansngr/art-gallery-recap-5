import { useArtGalleryContext } from "@/utils/ArtGalleryContext";
import CommentDisplay from "../CommentDisplay.js/CommentDisplay";
import AddComment from "../AddComment/AddComment";

export default function CommentSection({ slug }) {
  const { comments, handleAddComment } = useArtGalleryContext();
  return (
    <>
      <h2>Comments:</h2>
      <AddComment slug={slug} handleAddComment={handleAddComment} />
      <CommentDisplay comments={comments} slug={slug} />
    </>
  );
}
