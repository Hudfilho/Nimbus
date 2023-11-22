import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";

const Principal = () => {
  const sectionStyle = {
    padding: "40px",
  };

  const footerStyle = {
    marginTop: "40px",
  };

  return (
    <div>
      <div>
        <div style={sectionStyle}>
          <Header />
        </div>
        <div style={sectionStyle}>
          <Main />
        </div>
        <div style={footerStyle}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Principal;
