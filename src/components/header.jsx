import './css/header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="headerContainer bgColour">
      <h1 className="headerTitle textColour">Will Westwood</h1>
      <div className="mobileMenuBTN" onClick={() => { menuSwitch() }}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000">
          <g id="menuBTN">
            <g>
              <g>
                <rect className="fillTransition" x="126.8" y="156" width="746.3" height="162.2"/>
              </g>
              <g>
                <rect className="fillTransition" x="126.8" y="418.9" width="746.3" height="162.2"/>
              </g>
              <g>
                <rect className="fillTransition" x="126.8" y="681.8" width="746.3" height="162.2"/>
              </g>
            </g>
          </g>
          <g id="closeBTN" style={{display: "none"}}>
	
		        <rect className="fillTransition" x="131.1" y="422.2" transform="matrix(0.7071 0.7071 -0.7071 0.7071 500 -207.1068)" width="737.8" height="155.7"/>
	
		        <rect className="fillTransition" x="131.1" y="422.2" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 1207.1068 500)" width="737.8" height="155.7"/>
          </g>
        </svg>
      </div>
      <div id="mobileMenu" className="switchHolder bgColour">
        <div className="headerBTNHolder">
          <Link to={'/work'} className="headerBTN textColour" onClick={() => { menuSwitch() }}>All Work</Link>
          <Link to={'/work/personal'} className="headerBTN textColour" onClick={() => { menuSwitch() }}>Personal Work</Link>
          <Link to={'/work/university'} className="headerBTN textColour" onClick={() => { menuSwitch() }}>University Work</Link>
          <Link to={'/about'} className="headerBTN textColour" onClick={() => { menuSwitch() }}>About</Link>
          <Link to={'/contact'} className="headerBTN textColour" onClick={() => { menuSwitch() }}>Contact</Link>
        </div>
        <div id="lightSwitch" className="bgColourInvert" onClick={() => { switchLights(); }}></div>
      </div>
    </div>
  );
}

let theme = 'light'

function switchLights() {
  let root = document.documentElement

  if (theme === 'light') {
    root.style.setProperty('--text', 'white')
    root.style.setProperty('--bg', '#212529')
    theme = 'dark'
  } else {
    root.style.setProperty('--text', 'black')
    root.style.setProperty('--bg', 'white')
    theme = 'light'
  }

}

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (darkThemeMq.matches) {
  switchLights();
} else {
  // Theme set to light.
}

let menuOpen = false;

function menuSwitch() {

  if (menuOpen) {
    document.getElementById("mobileMenu").style.right = "-100vw";
    document.getElementById("menuBTN").style.display = "initial";
    document.getElementById("closeBTN").style.display = "none";
    menuOpen = false;
  } else {
    document.getElementById("mobileMenu").style.right = "0";
    document.getElementById("menuBTN").style.display = "none";
    document.getElementById("closeBTN").style.display = "initial";
    menuOpen = true;
  }


}

export default Header;
