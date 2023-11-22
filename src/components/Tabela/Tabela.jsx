import React, { useEffect, useState } from "react";
import "./style.css";
import weather from "../../data/weather.json";

const Table = ({ selectedVariables, startDate, endDate }) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    var resultDate = weather.filter(function (entry) {
      var entryDate = entry["Formatted Date"];
      return entryDate >= startDate && entryDate <= endDate;
    });

    const filteredData = resultDate.map((row) => {
      const filteredRow = {};
      selectedVariables.forEach((variable) => {
        filteredRow[variable] = row[variable];
      });
      filteredRow["Formatted Date"] = row["Formatted Date"];
      return filteredRow;
    });

    setFilteredData(filteredData);
  }, [selectedVariables, startDate, endDate]);

  const downloadCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      selectedVariables.join(",") +
      ",Formatted Date\n" +
      filteredData
        .map(
          (row) =>
            selectedVariables
              .map((variable) => {
                const value = row[variable];
                return typeof value === "number" ? value.toFixed(2) : value;
              })
              .join(",") +
            "," +
            row["Formatted Date"]
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "tabela_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ padding: "5vw", margin: "15hv" }}>
      <h1>Tabela</h1>
      <div className="tabela-container">
        {filteredData.map((row, index) => (
          <div key={index} className="tabela-card">
            <h2>Data: {row["Formatted Date"]}</h2>
            {Object.entries(row).map(
              ([key, value]) =>
                key !== "Formatted Date" && (
                  <div key={key} className="card-body">
                    <div>{`${key}: ${
                      typeof value === "number" ? value.toFixed(2) : value
                    }`}</div>
                  </div>
                )
            )}
          </div>
        ))}
      </div>
      <button onClick={downloadCSV}>Exportar para CSV</button>
    </div>
  );
};

export default Table;
