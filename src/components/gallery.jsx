import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import db from '../db/db.json';
import './css/gallery.css';

class gItem{
  // super(){}
  constructor(id, size, cover, title, date, WIP) {
    this.id = id;
    this.size = size;
    this.cover = cover;
    this.title = title;
    this.date = date;
    this.WIP = WIP;
  }
}


function GItemCollection(props) {
  
  // let tag = this.props.tag
  // const history = useHistory();
  // const location = useLocation();

  let match = useRouteMatch();
  // console.log(match)

  var gItemsRenderArray = [];
  // console.log(db.length)
  for(var i=0; i<db.length; i++) {
    if (props.tag === "all" || db[i].tag === props.tag) {
      gItemsRenderArray.push(new gItem(db[i].id,db[i].size,db[i].cover,db[i].title,db[i].date,db[i].WIP))
    }
  }
  // console.log(gItemsRenderArray)

  // function handleClick(id) {
  //   history.push('/'+id);
  // }

  return (
    <div className="gItemsContainer">
      {gItemsRenderArray.map((item) => {

        return <Link to={`${match.url.replace('/'+match.params.id, "")}/${createLinkTitle(item.title)}`} key={item.id} id={"gItem"+item.id} 
                  style={{backgroundImage: "url('"+process.env.PUBLIC_URL+item.cover+"')"}}
                  className={"gItemHolder "+item.size}
                  onClick={() => {scrollTop();}}>
            <div className="gItemFader"></div>
            <div className="gItemDetailsHolder">
              <h1>{item.title}</h1>
              <p>{item.date}</p>
              <p className="redText">{item.WIP ? "Work in Progress" : ""}</p>
            </div>
            </Link>
      })}
    </div>
  );
}

function createLinkTitle(title) {
  return title.replace('/ /g', '-')
}

function scrollTop() {
  window.scrollTo(0, 0);
}

function listView(props) {

  var gItemsRenderArray = [];
  // console.log(db.length)
  for(var i=0; i<db.length; i++) {
    if (props.tag === "all" || db[i].tag === props.tag) {
      gItemsRenderArray.push(new gItem(db[i].id,db[i].size,db[i].cover,db[i].title,db[i].date,db[i].WIP))
    }
  }

  return (
    <div className='listViewContainer'>
      <button id='debugBTN' onClick={() => {textSwitch()}}>Switch</button>
      {gItemsRenderArray.map((item, index) => {
        return ( 
          <div className='listViewHolder' key={item.id}>
            <div className='textHider'>
              <h1 className='textColour'>{String(index) + '. ' + item.title}</h1>
            </div>
          </div>
        )
      })}
    </div>
  )
}

let textVisible = true;

const textSwitch = () => {
  
  let textEls = document.getElementsByTagName('h1')
  
  if (textVisible) {
    // console.log('hiding text')

    for (var i=0; i<textEls.length; i++) {
      textEls[i].style.transform = 'translate(0, 5vh)';
    }

    textVisible = false;
  } else {
    // console.log('showing text')

    for (var j=0; j<textEls.length; j++) {
      textEls[j].style.transform = 'translate(0, 0)';
    }

    textVisible = true;
  }
}

let view = 'list';

function ViewSwitch(props) {
  if (view === 'list') {
    return listView(props);
  } else if (view === 'grid') {
    return GItemCollection(props);
  } else {
    return <div>error</div>
  }
}

// GItemCollection()

export default ViewSwitch;