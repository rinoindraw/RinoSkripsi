import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import styles from "./GraphicChart.module.css";
import { database } from "../../firebase";
import { ref, onValue } from "firebase/database";

const BarChart = () => {
  const chartRef = useRef(null);
  const [metalCapacity, setMetalCapacity] = useState(0);
  const [organicCapacity, setOrganicCapacity] = useState(0);
  const [unorganicCapacity, setUnorganicCapacity] = useState(0);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (window.barChart) {
      window.barChart.destroy();
    }

    const chartData = {
      labels: ["Trash Bin"],
      datasets: [
        {
          label: "Logam Trash Bin",
          backgroundColor: "rgba(0, 103, 105, 0.5)",
          borderColor: "#176B87",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(0, 103, 105, 0.7)",
          hoverBorderColor: "#006769",
          data: [metalCapacity],
        },
        {
          label: "Non-Logam Trash Bin",
          backgroundColor: "rgba(0, 128, 0, 0.5)",
          borderColor: "rgba(0, 128, 0, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(0, 128, 0, 0.7)",
          hoverBorderColor: "rgba(0, 128, 0, 1)",
          data: [organicCapacity],
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
          max: 100,
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "#000",
          },
        },
      },
    };

    window.barChart = new Chart(ctx, {
      type: "bar",
      data: chartData,
      options: chartOptions,
    });
  }, [metalCapacity, organicCapacity, unorganicCapacity]);

  useEffect(() => {
    const metalRef = ref(database, "tempat_sampah/kapasitas_logam");
    const organicRef = ref(database, "tempat_sampah/kapasitas_nonlogam");

    onValue(metalRef, (snapshot) => {
      const data = snapshot.val();
      setMetalCapacity(data);
    });

    onValue(organicRef, (snapshot) => {
      const data = snapshot.val();
      setOrganicCapacity(data);
    });
  }, []);

  return (
    <div className={styles.barContainer}>
      <div className={styles.cardwrapper}>
        <div>
          <canvas className={styles.barChart} ref={chartRef}></canvas>
        </div>
        <p className={styles.chartLabel}>Bar Chart</p>
      </div>
    </div>
  );
};

export default BarChart;
