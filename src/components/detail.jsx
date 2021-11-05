import React from 'react';
import './css/detail.css';
import db from '../db/db.json';

class Detail extends React.Component {

  render() {
    return (
      <div>
      <div className="detailHolder">
        <div className="detailLeft">
          <div className="detailLeftSticky">
            <h1 className={ 'textColour' }>{ db[Number(this.props.detailID)].title }</h1>
            <p className={ 'textColour' }>{ db[Number(this.props.detailID)].date }</p>
          </div>
        </div>
        <div className="detailRight">
          <MainDetails detailID={ this.props.detailID }/>
        </div>
      </div>
      </div>
    );
  }

}

class MainDetails extends Detail {
  renderSwitch(param, data) {
    switch(param) {
      case "title":
        return <h1 className="detailTitle textColour">{ data }</h1>
      case "image":
        return <div className="detailImage">
          <div>
          <img src={process.env.PUBLIC_URL + data.src} alt={data.alt}></img>
          <p className="detailImageCap textColour">{data.cap}</p>
          </div>
          </div>;
      case "sub":
        return <h2 className="detailSub textColour">{ data }</h2>
      case "text":
        return <p className="detailText textColour">{ data }</p>
      case "link":
        return <a className="detailLink" href={data.url} target={data.target}>{data.text}</a>
      case "spacer":
        return <div className="detailSpacer" style={{height: data+"vh"}}></div>
      case "bibliography":
        return <BibliographyModule bibliData={data} />
      default:
        return console.log("Error");
    }
  }

  render() { 
    if (!db[Number(this.props.detailID)].detail) {
      return (<DBError />)
    } else {
      return db[Number(this.props.detailID)].detail.map((item, index) => {
        return <div key={ index }>
         {this.renderSwitch(item.type, item.data)}
        </div>
      })
    }
  }
}

class BibliographyModule extends React.Component {

  constructor(bibliData) {
    super(bibliData)
    this.bibliData = bibliData;
  }

  render() {
    return this.bibliData.bibliData.map((item, index) => {
      return <div>
        <BibliographyModuleDetail bibliData={item} />
      </div>
    })
  }
}

class BibliographyModuleDetail extends BibliographyModule {

  constructor(bibliData) {
    super(bibliData)
    this.bibliData = bibliData;
  }

  render() {
    var authorString = "";
    for (var i=0; i< this.bibliData.bibliData.authors.length; i++) {
      if (i === (this.bibliData.bibliData.authors.length-1)) {
        authorString += 'and '+this.bibliData.bibliData.authors[i][1]+', '+this.bibliData.bibliData.authors[i][0].slice(0,1)+'.'
      } else if (i === (this.bibliData.bibliData.authors.length-2)) {
        authorString += this.bibliData.bibliData.authors[i][1]+', '+this.bibliData.bibliData.authors[i][0].slice(0,1)+'. '
      } else {
        authorString += this.bibliData.bibliData.authors[i][1]+', '+this.bibliData.bibliData.authors[i][0].slice(0,1)+'., '
      }
    }
    
    return <div className="detailBibliography">
      <h3 className="bibliTitle textColour">"{this.bibliData.bibliData.title}", ({this.bibliData.bibliData.year})</h3>
      <p className="bibliText textColour">{authorString} {this.bibliData.bibliData.publisher}.</p>
      <span className="textColour">{this.bibliData.bibliData.site}: </span><a className="bibliURL" href={this.bibliData.bibliData.url}>{this.bibliData.bibliData.url}</a>
      </div>
    
  }
}


function DBError() {
  return (
      <p className="textColour">An error occurred while trying to retrieve data from the database,<br></br>were sorry for the inconvenience.</p>
    );
}


export default Detail;
