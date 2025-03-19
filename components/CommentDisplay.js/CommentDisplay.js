import styled from "styled-components";

export default function CommentDisplay({ comments, slug }) {
  const matchingComments = comments.filter((comment) => comment.slug === slug);

  return (
    <CommentList>
      {matchingComments.map((comment) => {
        return (
          <CommentListItem key={comment.slug}>
            <CommentAuthorDate>{comment.author.toUpperCase()} says:</CommentAuthorDate>
            <CommentText>
              {comment.text}
            </CommentText>
            <CommentAuthorDate>Written on: {comment.date}</CommentAuthorDate>
          </CommentListItem>
        );
      })}
    </CommentList>
  );
}

const CommentList = styled.ul`
all: unset;
list-style: none;
display: flex;
flex-direction: column;
gap: 1rem;
padding-top: 1.5rem;
width: 300px;
align-items: center;
`;

const CommentListItem = styled.li`
background-color: #111111;
border-radius: 10px;
padding: 10px 20px;
width: 100%;
`;

const CommentAuthorDate = styled.p`
font-size: 12px;
margin: 0;
color: #575757;
`;

const CommentText = styled.p`
font-size: 16px;
font-weight: 400;
`;