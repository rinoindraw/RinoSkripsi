import React from "react";
import BarChart from "../GraphicChart/BarChart";
import styles from "./TrashBinThree.module.css";
import logoSkripsi from "../../assets/LogoSkripsiTextBesar.png";

const TrashBinThree = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.dashboard}>
          <div className={styles.tittleWrapper}>
            <img src={logoSkripsi} alt="Logo" />
            <div className={styles.tittleText}>
              <h2>Graphic</h2>
              <p>TrashCare</p>
            </div>
          </div>
          <BarChart />
        </div>
      </div>
    </section>
  );
};

export default TrashBinThree;
