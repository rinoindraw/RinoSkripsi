import React from "react";
import BarChart from "../GraphicChart/BarChart";
import Footer from "../Footer/Footer";
import styles from "./TrashBinThree.module.css";
import logoSkripsi from "../../assets/logo_skripsi.png";

const TrashBinThree = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.dashboard}>
          <div className={styles.tittleWrapper}>
            <img src={logoSkripsi} alt="Logo" />
            <div className={styles.tittleText}>
              <h2>Graphic</h2>
              <p>BottleCare</p>
            </div>
          </div>
          {/* <div className={styles.chartWrapper}>
            <ChartFour />
            <ChartFive />
            <ChartSix />
          </div> */}
          <BarChart />
        </div>
      </div>
      {/* <div className={styles.footerContainer}>
        <Footer />
      </div> */}
    </section>
  );
};

export default TrashBinThree;
