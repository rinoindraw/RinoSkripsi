import React from "react";
import ChartOne from "../GraphicChart/OrganicCapacityChart";
import styles from "./TrashBinTwo.module.css";
import logoSkripsi from "../../assets/LogoSkripsiTextBesar.png";

const TrashBinTwo = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.dashboard}>
          <div className={styles.tittleWrapper}>
            <img src={logoSkripsi} alt="Logo" />
            <div className={styles.tittleText}>
              <h2>Non-Logam Trash Bin</h2>
              <p>TrashCare</p>
            </div>
          </div>
          <div className={styles.chartWrapper}>
            <ChartOne />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrashBinTwo;
