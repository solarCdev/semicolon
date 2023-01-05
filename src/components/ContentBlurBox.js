import "./ContentBlurBox.css";

export const ContentBlurBox = ({ title, content }) => {
  return (
    <div className="box">
      <h3 className="box_t">{title}</h3>
      {content.split("nline").map((ele) => (
        <span className="box_c">
          {ele}
          <br />
        </span>
      ))}
    </div>
  );
};
