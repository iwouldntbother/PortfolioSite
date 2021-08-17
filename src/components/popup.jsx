import './css/popup.css';

// function Popup() {

//   return(
//     <div id="popupCont" className="popupContainer">
//       <div className="popupHolder bgColour">
//         <p className="textColour">This site uses cookies for extra features, these are not necciesry so feel free to deny them.</p>
//         <div className="buttonHolder">
//           <div className="button btn-green" onClick={() => {eula('accept')}}>Accept</div>
//           <div className="button btn-red" onClick={() => {eula('deny')}}>Deny</div>
//         </div>
//       </div>
//     </div>
//   );

// }

function eula(choice) {
  console.log(choice)
  if (choice === 'accept') {
    // EULA accepted
    createCookie()
  } else {
    // EULA denied
    removePopup()
  }
}

function removePopup() {
  const popupCont = document.getElementById('popupCont');
  if (popupCont !== null) {
    popupCont.remove();
  }
}

function createCookie() {
  const d = new Date();
  d.setTime(d.getTime() + (30*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  let theme = getComputedStyle(document.body).getPropertyValue('--bg') === '#212529' ? 'dark' : 'light';
  console.log(getComputedStyle(document.body).getPropertyValue('--bg') === '#212529' ? 'dark' : 'light')
  // console.log(getComputedStyle(document.body).getPropertyValue('--bg'))
  document.cookie = "theme=" + theme + ";" + expires + ";path=/";
  removePopup();
}

function getCookie() {
  let name = "theme=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function Popup(){
  if (getCookie() === '') {
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
} else {
  return(
    <div></div>
  )
}
}

export default Popup;