import React from "react";
import TrashCapacityChart from "../GraphicChart/GraphicChart";
import OrganicCapacityChart from "../GraphicChart/OrganicCapacityChart";
import UnOrganicCapacityChart from "../GraphicChart/UnOrganicCapacityChart";
import BarChart from "../GraphicChart/BarChart";
import Footer from "../Footer/Footer";
import styles from "./TrashBinOne.module.css";
import logoSkripsi from "../../assets/logo_skripsi.png";

const TrashBinOne = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.dashboard}>
          <div className={styles.tittleWrapper}>
            <img src={logoSkripsi} alt="Logo" />
            <div className={styles.tittleText}>
              <h2>Logam Trash Bin</h2>
              <p>BottleCare</p>
            </div>
          </div>
          <div className={styles.chartWrapper}>
            <TrashCapacityChart />
            {/* <OrganicCapacityChart /> */}
            {/* <UnOrganicCapacityChart /> */}
          </div>
          {/* <BarChart /> */}
        </div>
      </div>
      {/* <div className={styles.footerContainer}>
        <Footer />
      </div> */}
    </section>
  );
};

export default TrashBinOne;
