export default function CommentDisplay({ comments, slug }) {
  const matchingComments = comments.filter((comment) => comment.slug === slug);

  return (
    <ul>
      {matchingComments.map((comment) => {
        return (
          <li key={comment.slug}>
            <p>{comment.author} says:</p>
            <p>
              <b>{comment.text}</b>
            </p>
            <p>Written on: {comment.date}</p>
          </li>
        );
      })}
    </ul>
  );
}
