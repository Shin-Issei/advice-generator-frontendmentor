import { useEffect, useState } from "react";
import "./App.css";
import AdviceCard from "./Components/adviceCard";

function App() {
  // Fetch is done here because display component is for display only
  let [adviceData, assignData] = useState([]);
  useEffect(() => {
    getAdvice();
  }, []);
  function getAdvice() {
    let slip_id = Math.round(Math.random() * 223);
    fetch(`https://api.adviceslip.com/advice/${slip_id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        assignData(res.slip);
      });
  }

  if(adviceData === undefined){
    getAdvice()
  }
  else{
    return (
      <div className="App">
        <AdviceCard adviceID={adviceData.id} adviceText={adviceData.advice} getAdvice={getAdvice} />
        
      </div>
    )
  }
;
}

export default App;
