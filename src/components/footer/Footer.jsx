import "./footer.css";

// data
import data from "../../data/data";
const salonName = data.name;

const Footer = () => {
  return (
    <footer>
      <div className="footer_bg"></div>
      <p>{salonName}</p>
    </footer>
  );
};

export default Footer;
