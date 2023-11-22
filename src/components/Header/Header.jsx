import myImage from "../images/LogoNimbus.png";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="nav">
        <div className="menu">
          <div className="Home">Home</div>
          <div className="Contato">Contatos</div>
          <a href="" className="SobreNos">
            Sobre Nos
          </a>
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
