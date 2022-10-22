import React from 'react';
import './css/detail.css';
import db from '../db/db.json';

class Detail extends React.Component {
  // workinprogress() {
  //   if (db[Number(this.props.detailID)].WIP) {
  //     return
  //   }
  // }

  render() {
    return (
      <div>
        <div className="detailHolder">
          <div className="detailLeft">
            <div className="detailLeftSticky">
              <h1 className={'textColour'}>
                {db[Number(this.props.detailID)].title}
              </h1>
              <p className={'textColour'}>
                {db[Number(this.props.detailID)].date}
              </p>
              <p className="redText">
                {db[Number(this.props.detailID)].WIP ? 'Work in Progress' : ''}
              </p>
            </div>
          </div>
          <div className="detailRight">
            <MainDetails detailID={this.props.detailID} />
          </div>
        </div>
      </div>
    );
  }
}

class MainDetails extends Detail {
  renderSwitch(param, item) {
    switch (param) {
      case 'title':
        return <h1 className="detailTitle textColour">{item.data}</h1>;
      case 'image':
        return (
          <div className="detailImage">
            <div>
              <img
                src={process.env.PUBLIC_URL + item.data.src}
                alt={item.data.alt}
              ></img>
              <p className="detailImageCap textColour">{item.data.cap}</p>
            </div>
          </div>
        );
      case 'sub':
        return <h2 className="detailSub textColour">{item.data}</h2>;
      case 'text':
        return <p className="detailText textColour">{item.data}</p>;
      case 'link':
        return (
          <a
            className="detailLink"
            href={item.data.url}
            target={item.data.target}
          >
            {item.data.text}
          </a>
        );
      case 'spacer':
        return (
          <div
            className="detailSpacer"
            style={{ height: item.data + 'vh' }}
          ></div>
        );
      case 'bibliography':
        return <BibliographyModule bibliData={item.data} />;
      case 'imageGrid':
        return <ImageGrid data={item} />;
      default:
        return console.log('Error');
    }
  }

  render() {
    if (!db[Number(this.props.detailID)].detail) {
      return <DBError />;
    } else {
      return db[Number(this.props.detailID)].detail.map((item, index) => {
        return <div key={index}>{this.renderSwitch(item.type, item)}</div>;
      });
    }
  }
}

class BibliographyModule extends React.Component {
  constructor(bibliData) {
    super(bibliData);
    this.bibliData = bibliData;
  }

  render() {
    return this.bibliData.bibliData.map((item, index) => {
      return (
        <div key={index}>
          <BibliographyModuleDetail bibliData={item} />
        </div>
      );
    });
  }
}

class BibliographyModuleDetail extends BibliographyModule {
  constructor(bibliData) {
    super(bibliData);
    this.bibliData = bibliData;
  }

  render() {
    var authorString = '';
    for (var i = 0; i < this.bibliData.bibliData.authors.length; i++) {
      if (this.bibliData.bibliData.authors[i].length > 1) {
        if (
          i === this.bibliData.bibliData.authors.length - 1 &&
          this.bibliData.bibliData.authors.length > 1
        ) {
          authorString +=
            'and ' +
            this.bibliData.bibliData.authors[i][1] +
            ', ' +
            this.bibliData.bibliData.authors[i][0].slice(0, 1) +
            '.';
        } else if (
          i === this.bibliData.bibliData.authors.length - 2 ||
          i === this.bibliData.bibliData.authors.length - 1
        ) {
          authorString +=
            this.bibliData.bibliData.authors[i][1] +
            ', ' +
            this.bibliData.bibliData.authors[i][0].slice(0, 1) +
            '. ';
        } else {
          authorString +=
            this.bibliData.bibliData.authors[i][1] +
            ', ' +
            this.bibliData.bibliData.authors[i][0].slice(0, 1) +
            '., ';
        }
      } else {
        if (
          i === this.bibliData.bibliData.authors.length - 1 &&
          this.bibliData.bibliData.authors.length > 1
        ) {
          authorString += 'and ' + this.bibliData.bibliData.authors[i][0] + '.';
        } else if (
          i === this.bibliData.bibliData.authors.length - 2 ||
          i === this.bibliData.bibliData.authors.length - 1
        ) {
          authorString += this.bibliData.bibliData.authors[i][0] + '. ';
        } else {
          authorString += this.bibliData.bibliData.authors[i][0] + '., ';
        }
      }
    }

    return (
      <div className="detailBibliography">
        <h3 className="bibliTitle textColour">
          "{this.bibliData.bibliData.title}", ({this.bibliData.bibliData.year})
        </h3>
        <p className="bibliText textColour">
          {authorString} {this.bibliData.bibliData.publisher}.
        </p>
        <span className="textColour">
          {this.bibliData.bibliData.site}:{' '}
          <a
            className="bibliURL"
            href={this.bibliData.bibliData.url}
            target="_blank"
            rel="noreferrer"
          >
            {this.bibliData.bibliData.url}
          </a>
        </span>
      </div>
    );
  }
}

class ImageGrid extends React.Component {
  constructor(item) {
    super(item);
    this.data = item.data.data;
    this.columns = item.data.columns;
    // console.log(this.columns);
  }

  imageList = () => {
    return this.data.map((item, index) => {
      return (
        <div
          className="imageGridItem"
          key={index}
          style={{ maxWidth: 66 / this.columns + 'vw' }}
        >
          <div className="imageGridHolder">
            <img
              className="imageGridIMG"
              src={item.src}
              alt={item.alt}
              style={{
                maxWidth: (66 - this.columns * 2) / this.columns + 'vw',
              }}
            ></img>
            <p className="imageGridCap textColour">{item.cap}</p>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="imageGridContainer">
        <this.imageList />
      </div>
    );
  }
}

function DBError() {
  return (
    <p className="textColour">
      An error occurred while trying to retrieve data from the database,
      <br></br>were sorry for the inconvenience.
    </p>
  );
}

export default Detail;
