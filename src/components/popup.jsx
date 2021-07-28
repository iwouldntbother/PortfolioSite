import './css/popup.css';

function Popup() {

  return(
    <div id="popupCont" className="popupContainer">
      <div className="popupHolder bgColour">
        <p className="textColour">This site uses cookies for extra features, these are not necciesry so feel free to deny them.</p>
        <div className="buttonHolder">
          <div className="button btn-green" onClick={() => {eula('accept')}}>Accept</div>
          <div className="button btn-red" onClick={() => {eula('deny')}}>Deny</div>
        </div>
      </div>
    </div>
  );

}

function eula(choice) {
  console.log(choice)
  if (choice === 'accept') {
    // EULA accepted
  } else {
    // EULA denied
    removePopup()
  }
}

function removePopup() {
  const popupCont = document.getElementById('popupCont')
  popupCont.remove();
}

export default Popup;