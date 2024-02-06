import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const GenderChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!Array.isArray(data) || data.length === 0) {
      // If data is not an array or is an empty array, do nothing
      return;
    }

    const ctx = chartRef.current.getContext("2d");
    const existingChart = Chart.getChart(ctx);

    if (existingChart) {
      existingChart.destroy();
    }

    const years = data.map((yearData) => yearData.year);
    const boysData = data.map((yearData) => yearData.maleCount);
    const girlsData = data.map((yearData) => yearData.femaleCount);

    const chartConfig = {
      type: "bar",
      data: {
        labels: years,
        datasets: [
          {
            label: "Boys",
            data: boysData,
            backgroundColor: "blue",
          },
          {
            label: "Girls",
            data: girlsData,
            backgroundColor: "pink",
          },
        ],
      },
      options: {
        scales: {
          x: {
            stacked: true,
            title: {
              display: true,
              text: "Year",
            },
          },
          y: {
            stacked: true,
            beginAtZero: true,
            title: {
              display: true,
              text: "Population",
            },
          },
        },
      },
    };

    new Chart(ctx, chartConfig);

    // Cleanup function to destroy the chart when component unmounts
    return () => {
      const chartInstance = Chart.getChart(ctx);
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef} id="genderChart" width="800" height="400" />
    </div>
  );
};

export default GenderChart;
