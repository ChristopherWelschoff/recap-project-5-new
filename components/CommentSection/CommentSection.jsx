import Comment from "../Comment/Comment";

export default function CommentSection({ comments, slug }) {
  const pieceComments = comments.find(
    (comment) => comment.piece === slug
  )?.comments;

  return (
    <section>
      <h3>Comments:</h3>
      <ul>
        {pieceComments ? (
          pieceComments.map((comment) => (
            <li key={comment.date}>
              <Comment text={comment.text} date={comment.date} />
            </li>
          ))
        ) : (
          <p>No comments so far...</p>
        )}
      </ul>
    </section>
  );
}
