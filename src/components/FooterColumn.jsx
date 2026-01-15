const FooterColumn = ({ items }) => {
  return (
    <ul className="footer-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default FooterColumn;
