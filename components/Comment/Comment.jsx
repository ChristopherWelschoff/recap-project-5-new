import styled from "styled-components";

export default function Comment({ date, text }) {
  return (
    <article>
      <ul>{date}</ul>
      <p>
        <b>
          <em>{text}</em>
        </b>
      </p>
    </article>
  );
}
