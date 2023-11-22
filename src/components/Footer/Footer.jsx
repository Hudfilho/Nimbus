import "./style.css";

const Footer = () => {
  return (
    <footer className="footer" style={{ padding: "40px" }}>
      <div className="overlap-group">
        <div className="text-1">©2023 Nimbus</div>
        <div className="group">
          <div className="home">Home</div>
          <div className="contact">Contatos</div>
          <a href="" className="SobreNos">
            Sobre Nos
          </a>
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
