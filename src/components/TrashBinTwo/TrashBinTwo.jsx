import React from "react";
import ChartOne from "../GraphicChart/OrganicCapacityChart";
import Footer from "../Footer/Footer";
import styles from "./TrashBinTwo.module.css";
import logoSkripsi from "../../assets/logo_skripsi.png";

const TrashBinTwo = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.dashboard}>
          <div className={styles.tittleWrapper}>
            <img src={logoSkripsi} alt="Logo" />
            <div className={styles.tittleText}>
              <h2>Non-Logam Trash Bin</h2>
              <p>BottleCare</p>
            </div>
          </div>
          <div className={styles.chartWrapper}>
            <ChartOne />
            {/* <ChartTwo /> */}
            {/* <ChartThree /> */}
          </div>
          {/* <BarChartOne /> */}
        </div>
      </div>
      {/* <div className={styles.footerContainer}>
        <Footer />
      </div> */}
    </section>
  );
};

export default TrashBinTwo;
