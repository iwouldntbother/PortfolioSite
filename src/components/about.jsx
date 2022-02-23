import './css/about.css';

function about() {
  return(
    <div id="aboutContainer">
      <h1 id="aboutTitle" className="textColour">Hi, I'm Will.</h1>
      <img src="/WillWestwood.jpg" alt="WillWestwood"></img>
      <p id="aboutPara" className="textColour">I'm a web developer and digital 3D artist, 
      currently studying Graphic Design at Central Saint Martins, London.<br/><br/>
      This site was designed and built by me, using the React framework.
      </p>
      <a href='https://github.com/wwstwd/GCDPortfolio' target='_blank' rel='noreferrer'>Code for this site</a>
    </div>
  )
}

export default about;