import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import styles from "./GraphicChart.module.css";
import {database} from "../../firebase"; 
import { ref, onValue } from "firebase/database";

const TrashCapacityChart = () => {
  const chartRef = useRef(null);
  const [metalCapacity, setMetalCapacity] = useState(0); // State untuk menyimpan kapasitas metal

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (window.myChart) {
      window.myChart.destroy();
    }

    const data = {
      labels: ["Filled", "Remaining"],
      datasets: [
        {
          data: [100 - metalCapacity, metalCapacity], // Menggunakan kapasitas metal yang diperoleh dari Firebase
          backgroundColor: ["#EE4E4E", "#FEFDED"],
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      plugins: {
        legend: {
          display: false,

          labels: {
            color: "#000",
          },
        },
      },
    };

    window.myChart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: options,
    });
  }, [metalCapacity]); // Gunakan metalCapacity sebagai dependensi useEffect

  useEffect(() => {
    const dbRef = ref(database, "tempat_sampah/kapasitas_logam");

    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Metal Capacity:", data);
      setMetalCapacity(data); 
    });
  }, []);

  return (
    <div className={styles.chartContainer}>
    <div className={styles.cardwrapper}>
      <div>
        <canvas 
          className={styles.chart} 
          ref={chartRef}
          width={800} 
          height={600} 
        ></canvas>
      </div>
      <p className={styles.chartNumber}>{metalCapacity}%</p>
      <p className={styles.chartText}>Logam Trash Bin</p>
    </div>
  </div>
  );
};

export default TrashCapacityChart;
