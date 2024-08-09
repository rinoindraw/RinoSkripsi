import React from "react";
import TrashCapacityChart from "../GraphicChart/GraphicChart";
import NonMetalCapacityChart from "../GraphicChart/NonMetalCapacityChart";
import BarChart from "../GraphicChart/BarChart";
import Footer from "../Footer/Footer";
import styles from "./Dashboard.module.css";
import pkmLogo from "../../assets/LogoSkripsiTextBesar.png";
import navIcon3 from "../../assets/nav-icon3.svg";

const Dashboard = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.dashboard}>
          <div className={styles.tittleWrapper}>
            <img className={styles.dashLogo} src={pkmLogo} alt="Logo" />
            <div className="social-icon">
              <a
                href="https://www.instagram.com/rinoindraw/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <div className={styles.tittleText}>
              <h2>Dashboard</h2>
              <p>TrashCare</p>
            </div>
          </div>
          <div className={styles.chartWrapper}>
            <TrashCapacityChart />
            <NonMetalCapacityChart />
          </div>
          <BarChart />
        </div>
      </div>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </section>
  );
};

export default Dashboard;
