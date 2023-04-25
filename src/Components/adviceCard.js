/* 
I. The advice card is for display only. The fetch ought to be done by the app it self at a higher level.
*/
import dice from "../Assets/images/icon-dice.svg"
import desktopDevider from "../Assets/images/dividerDesk.svg"

function AdviceCard({adviceID, adviceText,getAdvice}) {
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
