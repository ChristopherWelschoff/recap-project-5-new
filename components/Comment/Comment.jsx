export default function Comment({ date, text }) {
  return (
    <article>
      <p>{date}</p>
      <p><b><em>{text}</em></b></p>
    </article>
  );
}
