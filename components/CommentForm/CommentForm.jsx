import styled from "styled-components";

export default function CommentForm({ slug, onAddComment }) {
  function handleSubmit(event) {
    event.preventDefault();
    const commentText = event.target.textInput.value;
    const date = new Date();
    const dateGER = date.toLocaleString("de-DE", {
      timeZone: "Europe/Berlin",
      dateStyle: "short",
      timeStyle: "short",
    });
    onAddComment(slug, commentText, dateGER);
    event.target.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTextarea
        name="textInput"
        rows={4}
        placeholder="Share your thoughts..."
      ></StyledTextarea>
      <SendButton type="submit">Send</SendButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 500px;
  margin: 24px auto;
`;

const StyledTextarea = styled.textarea`
  resize: none;
  padding: 12px;
  border: 1px solid #d3dde3;
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.95rem;
  color: #33475b;
  background: #fff;
  transition: border-color 0.15s ease;

  &:focus {
    outline: none;
    border-color: #4682b4;
  }

  &::placeholder {
    color: #a3b3bf;
  }
`;

const SendButton = styled.button`
  background: none;
  border: 1px solid #e8e6e3;
  color: #e8e6e3;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: #15669d;
  }
`;
