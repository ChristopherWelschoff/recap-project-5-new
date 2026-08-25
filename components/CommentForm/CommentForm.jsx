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
      <input type="text" name="textInput" />
      <button type="submit">Send</button>
    </form>
  );
}
