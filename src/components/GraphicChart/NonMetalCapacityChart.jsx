import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import styles from "./GraphicChart.module.css";
import {database} from "../../firebase"; 
import { ref, onValue } from "firebase/database";

const NonMetalCapacityChart = ({ data }) => {
  const chartRef = useRef(null);
  const [nonMetalCapacity, setnonMetalCapacity] = useState(0); // State untuk menyimpan kapasitas metal

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (window.organicChart) {
      window.organicChart.destroy();
    }

    const data = {
      labels: ["Filled", "Remaining"],
      datasets: [
        {
          data: [100 - nonMetalCapacity, nonMetalCapacity], // Menggunakan kapasitas metal yang diperoleh dari Firebase
          backgroundColor: ["#EE4E4E", "#FEFDED"],
        },
      ],
    };

    const options = {
      responsive: true, // Diubah ke true jika mau di balikan menjadi responsive ketika dikecilkan
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

    window.organicChart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options,
    });
  }, [nonMetalCapacity]); // Gunakan metalCapacity sebagai dependensi useEffect

  useEffect(() => {
    const dbRef = ref(database, "tempat_sampah/kapasitas_nonlogam"); 

    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Non-Logam Capacity:", data);
      setnonMetalCapacity(data); 
    });
  }, []);

  return (
    <div className={styles.chartContainer}>
    <div className={styles.cardWrapperTwo}>
      <div>
        <canvas 
          className={styles.chart} 
          ref={chartRef}
          width={800} 
          height={600} 
        ></canvas>
      </div>
      <p className={styles.chartNumber}>{nonMetalCapacity}%</p>
      <p className={styles.chartText}>Non-Logam Trash Bin</p>
    </div>
  </div>
  );
};

export default NonMetalCapacityChart;
