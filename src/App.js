import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./component/Header";
import Location from "./component/Location";
import SearchBar from "./component/SearchBar";
import SideBar from "./component/SideBar";
import WeatherDetail from "./component/WeatherDetail";
import styles from "./styles/app.module.css";

function App() {
  const baseUrl = "http://localhost:3000/data";
  const [appSate, setAppState] = useState([]);
  const [location, setLocation] = useState("");
  const [temperature, setTemperature] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/data").then((res) => {
      console.log(res.data);
      setAppState(res.data);
      setLocation(res.data.location.name);
      setTemperature(res.data.current.temperature);
    });
  }, []);
  console.log("State Data : ", appSate);
  console.log("location : ", location);
  console.log("temperature : ", temperature);
  return (
    <div className={styles.container}>
      <div className={styles.weatherDetials}>
        <Header />
        <WeatherDetail temp={temperature} loc={location} />
      </div>
      <div className={styles.sidebarContainer}>
        <SideBar />
      </div>
    </div>
  );
}

export default App;
