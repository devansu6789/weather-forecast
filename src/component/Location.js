import React from "react";
import styles from "../styles/location.module.css";
import SearchBar from "./SearchBar";

function Location(props) {
  console.log("*****from location component**************");
  console.log(props.temp);
  console.log(props.loc);
  return (
    <div className={styles.locationContainer}>
      <div className={styles.location}>
        <SearchBar />
        <div className={styles.item1}>
          <div className={styles.item1Child}>{props.temp}</div>
          <div className={styles.item1Child}>item1</div>
          <div className={styles.item1Child}>{props.loc}</div>
        </div>
        <div className={styles.item2}>Weather</div>
      </div>
    </div>
  );
}

export default Location;
