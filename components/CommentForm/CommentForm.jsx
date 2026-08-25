export default function CommentForm({ slug, onAddComment }) {
  function handleSubmit(event) {
    event.preventDefault();
    const commentText = event.target.textInput.value;
    const date = new Date();
    onAddComment(slug, commentText, date);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        name="textInput"
        rows={4}
        cols={40}
        style={{ resize: "none" }}
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
}
