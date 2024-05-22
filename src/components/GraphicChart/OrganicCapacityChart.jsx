import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import styles from "./GraphicChart.module.css";
import {database} from "../../firebase"; // Sesuaikan dengan path ke file konfigurasi Firebase And
import { ref, onValue } from "firebase/database";

const OrganicCapacityChart = ({ data }) => {
  const chartRef = useRef(null);
  const [organicCapacity, setOrganicCapacity] = useState(0); // State untuk menyimpan kapasitas metal

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (window.organicChart) {
      window.organicChart.destroy();
    }

    const data = {
      labels: ["Filled", "Remaining"],
      datasets: [
        {
          data: [100 - organicCapacity, organicCapacity], // Menggunakan kapasitas metal yang diperoleh dari Firebase
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
  }, [organicCapacity]); // Gunakan metalCapacity sebagai dependensi useEffect

  useEffect(() => {
    const dbRef = ref(database, "tempat_sampah/kapasitas_nonlogam"); // Replace with your database reference path

    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Organic Capacity:", data);
      setOrganicCapacity(data); // Perbarui state metalCapacity dengan nilai dari Firebase
      // Handle the retrieved data here
    });
  }, []);

  return (
    <div className={styles.chartContainer}>
    <div className={styles.cardwrapper}>
      <div>
        <canvas 
          className={styles.chart} 
          ref={chartRef}
          width={800} // tentukan lebar yang diinginkan
          height={600} // tentukan tinggi yang diinginkan
        ></canvas>
      </div>
      <p className={styles.chartNumber}>{organicCapacity}%</p>
      <p className={styles.chartText}>Non-Logam Trash Bin</p>
    </div>
  </div>
  );
};

export default OrganicCapacityChart;
