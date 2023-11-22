import React, { useState } from "react";
import MAPA from "../../pages/Mapa";
import Grafic from "../Grafico/Grafico";
import TableComponent from "../Tabela/Tabela";
import "./style.css";

const variables = [
  "Summary",
  "Precip Type",
  "Temperature (C)",
  "Apparent Temperature (C)",
  "Humidity",
  "Wind Speed (km/h)",
  "Wind Bearing (degrees)",
  "Visibility (km)",
  "Loud Cover",
  "Pressure (millibars)",
  "Daily Summary",
];

const Main = () => {
  const [selectedFormat, setSelectedFormat] = useState("map");
  const [selectedVariables, setSelectedVariables] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  const handleVariableChange = (event) => {
    const variable = event.target.value;
    setSelectedVariables((prevSelected) => {
      if (prevSelected.includes(variable)) {
        return prevSelected.filter((v) => v !== variable);
      } else {
        return [...prevSelected, variable];
      }
    });
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const renderFormat = () => {
    switch (selectedFormat) {
      case "map":
        return <MAPA />;
      case "graph":
        return (
          <Grafic
            selectedVariables={selectedVariables}
            startDate={startDate}
            endDate={endDate}
          />
        );
      case "table":
        return (
          <TableComponent
            selectedVariables={selectedVariables}
            startDate={startDate}
            endDate={endDate}
          />
        );
      default:
        return null;
    }
  };

  return (
    <main>
      <div className="overlap">
        <div className="filtro">
          <div className="overlap-2">
            <div className="hero">
              <div className="hero-content">
                <div className="text-block-hero">
                  <div className="flexcontainer"></div>
                  <h2 className="title">Filtre os Dados</h2>
                </div>
                <p className="text">
                  <span className="span">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculusmus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    <br />
                  </span>
                </p>
              </div>
            </div>
            <div className="container">
              <div className="filter-container">
                <div className="filter">
                  <div className="form-group">
                    <div className="input-group date">
                      <label htmlFor="start">Data de Início: </label>
                      <input
                        type="date"
                        placeholder="Data de Início"
                        onChange={handleStartDateChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group date">
                      <label htmlFor="finish">Data Final: </label>
                      <input
                        type="date"
                        placeholder="Data Final"
                        onChange={handleEndDateChange}
                      />
                    </div>
                  </div>
                  <div className="input-block">
                    <label htmlFor="variavel-label">Variaveis: </label>
                    <select
                      className="variaveis"
                      multiple
                      onChange={handleVariableChange}
                      value={selectedVariables}
                    >
                      {variables.map((variable) => (
                        <option key={variable} value={variable}>
                          {variable}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="input-block">
                    <label htmlFor="frequencia-label">Frequencia: </label>
                    <input
                      type="text"
                      className="frequencia"
                      placeholder="Frequência"
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="estacao-label">Estação: </label>
                    <input
                      type="text"
                      className="estacao"
                      placeholder="Estação"
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="monitoramento-label">
                      Ponto de Monitoramento:{" "}
                    </label>
                    <input
                      type="text"
                      className="monitoramento"
                      placeholder="Ponto de Monitoramento"
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="operacao-label">Operação: </label>
                    <input
                      type="text"
                      className="operacao"
                      placeholder="Operação"
                    />
                  </div>
                </div>
                <div className="buttons">
                  <button className="search-button">Pesquisar</button>
                  <div className="formato-group">
                    <select
                      className="formato-button"
                      value={selectedFormat}
                      onChange={handleFormatChange}
                    >
                      <option value="map">Mapa</option>
                      <option value="graph">Grafico</option>
                      <option value="table">Tabela</option>
                    </select>
                  </div>
                  <button className="report-button">Visusalizar Dados</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {renderFormat()}
    </main>
  );
};

export default Main;
