import './css/header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
    <div className="headerContainer">
      <h1 className="headerTitle textColour">Will Westwood</h1>
      <div className="switchHolder">
        <div className="headerBTNHolder">
          <Link to={'/work'} className="headerBTN textColour">All Work</Link>
          <Link to={'/work/personal'} className="headerBTN textColour">Personal Work</Link>
          <Link to={'/work/university'} className="headerBTN textColour">University Work</Link>
          <Link to={'/about'} className="headerBTN textColour">About</Link>
          <Link to={'/contact'} className="headerBTN textColour">Contact</Link>
        </div>
        <div id="lightSwitch" className="bgColourInvert" onClick={() => { switchLights(); }}></div>
      </div>
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

export default Header;
