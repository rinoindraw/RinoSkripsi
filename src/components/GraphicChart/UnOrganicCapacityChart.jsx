import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import styles from "./GraphicChart.module.css";
import {database} from "../../firebase"; // Sesuaikan dengan path ke file konfigurasi Firebase And
import { ref, onValue } from "firebase/database";

const UnOrganicCapacityChart = ({ data }) => {
  const chartRef = useRef(null);
  const [unorganicCapacity, setUnorganicCapacity] = useState(0); // State untuk menyimpan kapasitas metal

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (window.unOrganicChart) {
      window.unOrganicChart.destroy();
    }

    const data = {
      labels: ["Filled", "Remaining"],
      datasets: [
        {
          data: [100 - unorganicCapacity, unorganicCapacity], // Menggunakan kapasitas metal yang diperoleh dari Firebase
          backgroundColor: ["#176B87", "#B4E4FF"],
        },
      ],
    };

    const options = {
      responsive: false, // Diubah ke true jika mau di balikan menjadi responsive ketika dikecilkan
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      plugins: {
        legend: {
          labels: {
            color: "#000",
          },
        },
      },
    };

    window.unOrganicChart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options,
    });
  }, [unorganicCapacity]); // Gunakan metalCapacity sebagai dependensi useEffect

  useEffect(() => {
    const dbRef = ref(database, "tong_sampah/kapasitas_unorganik"); // Replace with your database reference path

    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Unorganic Capacity:", data);
      setUnorganicCapacity(data); // Perbarui state metalCapacity dengan nilai dari Firebase
      // Handle the retrieved data here
    });
  }, []);

  return (
    <div className={styles.chartContainer}>
      <div className={styles.cardwrapper}>
        <div>
          <canvas className={styles.chart} ref={chartRef}></canvas>
        </div>
        <p className={styles.chartText}>UnOrganic Trash Bin</p>
      </div>
    </div>
  );
};

export default UnOrganicCapacityChart;
