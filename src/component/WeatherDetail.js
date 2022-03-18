import React from "react";
import styles from "../styles/weather.module.css";

function WeatherDetail(props) {
  return (
    <div className={styles.weatherDetailsContainer}>
      <div className={styles.temp}>12</div>
      <div className={styles.locationContainer}>
        <div className={styles.place}>London</div>
        <div className={styles.locationDetails}>
          <div className={styles.time}>10:36</div>
          <div className={styles.day}>Tuesday</div>
          <div className={styles.date}>22 Mar'22</div>
        </div>
      </div>
      <div className={styles.weatherData}>Sunny</div>
    </div>
  );
}

export default WeatherDetail;
