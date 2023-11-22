import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <div className="group">
      <div className="home">Home</div>
      <div className="contact">Contatos</div>
      <Link to="/about" className="SobreNos">
        Sobre Nos
      </Link>
    </div>
  );
};
