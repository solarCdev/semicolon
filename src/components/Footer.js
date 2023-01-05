import "./Footer.css";

export const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <span>
        &copy; semicolon {date.getFullYear()}
        <br />
        방문해주셔서 감사합니다!
      </span>
    </footer>
  );
};
