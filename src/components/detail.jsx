import React from 'react';
import db from '../db/db';
import './css/detail.css';

class Detail extends React.Component {

  render() {
    return (
      <div>
      <div className="detailHolder">
        <div className="detailLeft">
          <div className="detailLeftSticky">
            <h1 className={ 'textColour' }>{ db.galleryItems[Number(this.props.detailID)].title }</h1>
            <p className={ 'textColour' }>{ db.galleryItems[Number(this.props.detailID)].date }</p>
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
        return <div className="detailImage"><img src={process.env.PUBLIC_URL + data.src} alt={data.alt}></img></div>;
      case "sub":
        return <h2 className="detailSub textColour">{ data }</h2>
      case "text":
        return <p className="detailText textColour">{ data }</p>
      case "link":
        return <a className="detailLink textColour" href={data.url} target={data.target}>{data.text}</a>
      default:
        return console.log("Error");
    }
  }

  render() { 
    if (!db.galleryItems[Number(this.props.detailID)].detail) {
      return (<DBError />)
    } else {
      return db.galleryItems[Number(this.props.detailID)].detail.map((item, index) => {
        return <div key={ index }>
         {this.renderSwitch(item.type, item.data)}
        </div>
      })
    }
  }
}

function DBError() {
  return (
      <p>An error occurred while trying to retrieve data from the database,<br></br>were sorry for the inconvenience.</p>
    );
}


export default Detail;
