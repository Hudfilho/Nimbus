import "./style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" style={{ padding: "40px" }}>
      <div className="overlap-group">
        <div className="text-1">©2023 Nimbus</div>
        <div className="group">
          <Link to="/" className="Home">
            Home
          </Link>
          <div className="contact">Contatos</div>
          <Link to="/about" className="SobreNos">
            Sobre Nos
          </Link>
        </div>
        <div className="rectangle" />
        <div className="logo-landie">
          <div className="landie">Nimbus</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
