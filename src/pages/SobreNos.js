import Cartao from "./Cartao";
import "./styles.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function SobreNos() {
  const sectionStyle = {
    padding: "40px",
  };

  const footerStyle = {
    marginTop: "40px",
  };

  return (
    <div className="App">
      <div style={sectionStyle}>
        <Header />
      </div>

      <img src="https://cronos.nimbusmeteorologia.com.br/static/media/nb-logo.d3f5fb20.jpg"></img>

      <h1>Sobre nos</h1>
      <p className="Texto">
        Nossa equipe Lucky Roll especializada em projetos front-end, está
        empenhada na criação de um site de excelência para a empresa Nimbus.
        Nosso grupo está dedicado a desenvolver uma plataforma online que
        ofereça uma experiência de usuário intuitiva e de alta qualidade.
        Estamos aplicando nossos conhecimentos em design e desenvolvimento web
        para garantir que o site atenda às necessidades da empresa e de seus
        clientes, destacando-se pela funcionalidade, estética e acessibilidade.
        Nosso compromisso é entregar um produto final que eleve a presença
        online da Nimbus e impulsione sua interação com seu público-alvo de
        forma eficiente e impactante.
      </p>
      <p className="Texto">
        A Nimbus é reconhecida como uma empresa especializada na distribuição
        precisa de dados meteorológicos em tempo real, atendendo às necessidades
        de uma variedade de empresas e clientes. Com uma abordagem focada na
        entrega de informações meteorológicas atualizadas e confiáveis, a Nimbus
        se destaca por sua capacidade de fornecer dados essenciais para apoiar
        decisões críticas em diversos setores. Sua expertise na coleta e
        disponibilização de informações meteorológicas é fundamental para
        auxiliar organizações a melhorarem seu planejamento estratégico e
        operações diárias.
      </p>

      <h1>Nosso time:</h1>
      <div className="Cartoes">
        <Cartao
          name="Hudson Guilherme"
          position="CEO"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies risus id arcu pretium."
          imageUrl="https://yt3.googleusercontent.com/ytc/APkrFKYABwp4e-BVqD5bFcodwOawuAHvbBSbVZBgD7o_oQ=s900-c-k-c0x00ffffff-no-rj"
        />
        <Cartao
          name="Henrique Barbosa"
          position="CEO"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies risus id arcu pretium."
          imageUrl="https://i1.sndcdn.com/artworks-FozYneuRIHafAthN-Wdpe9A-t500x500.jpg"
        />
        <Cartao
          name="Thiago Borsoni"
          position="CEO"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies risus id arcu pretium."
          imageUrl="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2023/07/07/fef3ba07-78ab-4b6f-98bd-c4281caa0fa4_2b7d0fc3.jpg?itok=cGBIcWdn&v=1688725357"
        />
        <Cartao
          name="Daniel ???"
          position="CEO"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies risus id arcu pretium."
          imageUrl="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2023/07/07/fef3ba07-78ab-4b6f-98bd-c4281caa0fa4_2b7d0fc3.jpg?itok=cGBIcWdn&v=1688725357"
        />
        <Cartao
          name="Ricardo Castro"
          position="CEO"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies risus id arcu pretium."
          imageUrl="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2023/07/07/fef3ba07-78ab-4b6f-98bd-c4281caa0fa4_2b7d0fc3.jpg?itok=cGBIcWdn&v=1688725357"
        />
      </div>

      <div style={footerStyle}>
        <Footer />
      </div>
    </div>
  );
}
