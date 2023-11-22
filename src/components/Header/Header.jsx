import myImage from "../images/LogoNimbus.png";
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="nav">
        <div className="menu">
          <Link to="/" className="Home">
            Home
          </Link>
          <div className="Contato">Contatos</div>
          <Link to="/about" className="SobreNos">
            Sobre Nos
          </Link>
        </div>
        <div className="logo">
          <img className="logo-header" alt="Logo Nimbus" src={myImage} />
        </div>
        <button className="login-button">Login</button>
      </div>
    </header>
  );
};

export default Header;
