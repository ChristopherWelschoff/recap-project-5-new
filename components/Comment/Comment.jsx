import styled from "styled-components";

export default function Comment({ date, text }) {
  return (
    <CommentCard>
      <CommentDate>{date}</CommentDate>

      <CommentText>{text}</CommentText>
    </CommentCard>
  );
}

const CommentCard = styled.article`
  width: 100%;
  max-width: 500px;
  margin: 12px auto;
  padding: 14px 18px;

  background: #202124;
  border: 1px solid #3a3a3a;
  border-radius: 12px;

  box-sizing: border-box;
`;

const CommentDate = styled.p`
  margin: 0 0 8px;

  color: #9da3a6;
  font-size: 0.8rem;
  text-align: left;
`;

const CommentText = styled.p`
  margin: 0;

  color: #e8e6e3;
  font-size: 1rem;
  line-height: 1.5;
  text-align: left;
`;
