import React, { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import weather from "../../data/weather.json";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Grafic = ({ selectedVariables, startDate, endDate }) => {
  const [chartType, setChartType] = useState("line");
  const [filteredData, setFilteredData] = useState([]);

  const mudarVizu = () => {
    setChartType((prevType) => (prevType === "line" ? "bar" : "line"));
  };

  //filtro
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

  //geração da tabela
  useEffect(() => {
    const labels = filteredData.map((row) => row["Formatted Date"]);
    const datasets = selectedVariables.map((variable) => ({
      label: variable,
      data: filteredData.map((row) => row[variable]),
      borderWidth: 2,
    }));
    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
      type: chartType,
      data: {
        labels: labels,
        datasets: datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            ticks: {
              callback: (value, index) => {
                return window.innerWidth <= 600 && index % 2 !== 0 ? "" : value;
              },
              maxRotation: 0,
              minRotation: 0,
            },
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => myChart.destroy();
  }, [chartType, filteredData, selectedVariables]);

  const exportToPDF = () => {
    const canvas = document.getElementById("myChart").getContext("2d").canvas;

    html2canvas(canvas).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      // Calculate min and max values for numeric keys
      const summary = {};
      filteredData.forEach((row) => {
        Object.entries(row).forEach(([key, value]) => {
          if (typeof value === "number") {
            if (!summary[key]) {
              summary[key] = { min: value, max: value };
            } else {
              summary[key].min = Math.min(summary[key].min, value);
              summary[key].max = Math.max(summary[key].max, value);
            }
          }
        });
      });

      // Add legend with data summary after the chart image
      pdf.setFontSize(12);
      pdf.text("Resumo dos Dados:", 20, imgHeight + 30);

      Object.entries(summary).forEach(([key, { min, max }], index) => {
        pdf.text(
          `${key}: Min - ${min}, Max - ${max}`,
          20,
          imgHeight + 40 + index * 10
        );
      });

      // Add start date and end date
      pdf.text(
        `Data de Inicio: ${startDate}`,
        20,
        imgHeight + 40 + Object.keys(summary).length * 10
      );
      pdf.text(
        `Data Final: ${endDate}`,
        20,
        imgHeight + 50 + Object.keys(summary).length * 10
      );

      pdf.save("gráfico.pdf");
    });
  };

  const exportToCSV = () => {
    // Create a CSV string from the filteredData
    const csvData =
      "Formatted Date," +
      selectedVariables.join(",") +
      "\n" +
      filteredData
        .map((row) =>
          Object.values(row)
            .map((value) => (typeof value === "string" ? `"${value}"` : value))
            .join(",")
        )
        .join("\n");

    // Create a Blob containing the CSV data
    const blob = new Blob([csvData], { type: "text/csv" });

    // Create a link element and trigger a click to download the CSV file
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "exported_data.csv";
    link.click();
  };
  return (
    <div style={{ height: "80vh", padding: "5vw", marginBottom: "15px" }}>
      <h1>Grafico</h1>
      <canvas id="myChart"></canvas>
      <button onClick={mudarVizu}>Mudar Vizualização</button>
      <button onClick={exportToPDF}>Exportar para PDF</button>
      <button onClick={exportToCSV}>Exportar para CSV</button>
    </div>
  );
};
export default Grafic;
