import React from "react";
import styles from "../styles/sidebar.module.css";
import SearchBar from "./SearchBar";

function SideBar(props) {
  console.log("*****from location component**************");
  console.log(props.temp);
  console.log(props.loc);
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebar}>
        <SearchBar />
        <div className={styles.item1}>
          
        </div>
        <div className={styles.item2}></div>
      </div>
    </div>
  );
}

export default SideBar;
