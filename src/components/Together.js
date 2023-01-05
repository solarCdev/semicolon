import "./Together.css";

export const Together = ({ src, content }) => {
  return (
    <li className="tog_li">
      <div className="lang">{src.map((ele) => ele)}</div>
      <ul>
        {content.map((ele) => (
          <li>{ele}</li>
        ))}
      </ul>
    </li>
  );
};
