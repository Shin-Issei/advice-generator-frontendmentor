/* 
I. The advice card is for display only. The fetch ought to be done by the app it self at a higher level.
*/

function AdviceCard({adviceID, adviceText}) {
  return (
    <div id="advice-card">
      <p id="advice-num">ADVICE #{adviceID}</p>
      <p>{adviceText}</p>
    </div>
  );
}

export default AdviceCard;
