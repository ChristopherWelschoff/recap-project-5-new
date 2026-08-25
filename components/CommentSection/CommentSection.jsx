import Comment from "../Comment/Comment";
import styled from "styled-components";

export default function CommentSection({ comments, slug }) {
  const pieceComments = comments.find(
    (comment) => comment.piece === slug
  )?.comments;

  console.log(pieceComments);

  return (
    <Section>
      <Title>Comments:</Title>
      <CommentList>
        {pieceComments ? (
          pieceComments.map((comment) => (
            <CommentItem key={comment.date}>
              <Comment text={comment.text} date={comment.date} />
            </CommentItem>
          ))
        ) : (
          <EmptyMessage>No comments so far...</EmptyMessage>
        )}
      </CommentList>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  max-width: 520px;
  margin: 30px auto;
  padding: 0 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  margin: 0 0 20px;
  text-align: center;
`;

const CommentList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;

  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CommentItem = styled.li`
  width: 100%;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: #999;
`;
