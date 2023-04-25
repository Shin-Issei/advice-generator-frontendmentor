import dice from "../Assets/images/icon-dice.svg";
import desktopDevider from "../Assets/images/dividerDesk.svg";

function AdviceCard({ adviceID, adviceText, getAdvice }) {
  return (
    <div id="advice-card">
      <p id="advice-num">ADVICE #{adviceID}</p>
      <p id="advice-text">"{adviceText}"</p>
      <img src={desktopDevider} alt="divider"></img>
      <div id="button-wrapper">
        <button onClick={getAdvice}>
          <img src={dice} alt="Dice"></img>
        </button>
      </div>
    </div>
  );
}

export default AdviceCard;
