import { useEffect, useState } from "react";
import "./App.css";
import AdviceCard from "./Components/adviceCard";
import diceIcon from "../src/Assets/images/icon-dice.svg";

function App() {
  // Fetch is done here because display component is for display only
  let [adviceData, assignData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  function getData() {
    let slip_id = Math.round(Math.random() * 224);
    if (slip_id === 48) {
      // Advice #48 is returning an error
      slip_id += 1;
    }
    fetch(`https://api.adviceslip.com/advice/${slip_id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        assignData(res.slip);
      });
  }

  return (
    <div className="App">
      <AdviceCard adviceID={adviceData.id} adviceText={adviceData.advice} />
      <button onClick={getData}>
        <img src={diceIcon} alt="Dice"></img>
      </button>
    </div>
  );
}

export default App;
