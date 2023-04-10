/* 
I. The advice card is for display only. The fetch ought to be done by the app it self at a higher level.
*/
// import diceIcon from "../Assets/images/icon-dice.svg";
function AdviceCard(props) {
  return (
    <div>
      <p>{props.adviceID}</p>
      <p>{props.adviceText}</p>
      {/* <img src={diceIcon} alt="dice icon"></img> */}
    </div>
  );
}

export default AdviceCard;
