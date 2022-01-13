import React from 'react';
import './css/welcome.css';
import p5 from 'p5';

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  Sketch = (p) => {
    var poppins;
    var pts;

    p.preload = () => {
      poppins = p.loadFont('/Poppins-Bold.ttf')
    }

    p.setup = () => {
      p.createCanvas(p.windowWidth, (p.windowHeight * 0.92))

      pts = poppins.textToPoints('Will Westwood', 0, 0, 120, {
        sampleFactor: 0.25,
        simplifyThreshold: 0
      })

    }

    p.draw = () => {
      p.background(255)
      // grid()
      p.translate(20, 140);
      p.stroke(0);
      p.beginShape(p.POINTS)
      for(let i =0; i< pts.length; i++){
        p.fill(i % 255);
        p.vertex(pts[i].x, pts[i].y, pts[i].y); 
      }
      p.endShape()
    }

    const particle = (x, y, size, colour) => {
      p.fill(colour)
      p.ellipse(x, y, size, size);
    }
    // eslint-disable-next-line
    const grid = () => {
      let spacing = 20
      let x = Math.ceil(p.windowWidth / spacing);
      let y = Math.ceil(p.windowHeight / spacing);
      for(let i=0.5; i<x; i++) {
        for(let j=0.5; j<y; j++) {
          particle((i*spacing), (j*spacing), (p.windowWidth/400), 0)
        }
      }
      // p.ellipse(p.mouseX, p.mouseY, 100, 100)
    }
  }

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current)
  }

  render() {
    return (
      <div>
        <div ref={this.myRef}></div>
      </div>
    )
  }
}


export default Welcome;