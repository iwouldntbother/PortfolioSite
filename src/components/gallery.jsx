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
                  style={{backgroundImage: "url('"+process.env.PUBLIC_URL+item.cover+"')", transform: "scale(0)"}}
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

function ListView(props) {

  var gItemsRenderArray = [];
  // console.log(db.length)
  for(var i=0; i<db.length; i++) {
    if (props.tag === "all" || db[i].tag === props.tag) {
      gItemsRenderArray.push(new gItem(db[i].id,db[i].size,db[i].cover,db[i].title,db[i].date,db[i].WIP))
    }
  }

  return (
    <div className='listViewContainer'>
      {gItemsRenderArray.map((item, index) => {
        return ( 
          <div className='listViewHolder' key={item.id}>
            <div className='textHider'>
              <h1 className='textColour listItem' style={{transform: 'translate(0, 8vh)'}}>{String(index) + '. ' + item.title}</h1>
            </div>
          </div>
        )
      })}
    </div>
  )
}

let textVisible = false;
let gridVisible = false;

const GalleryView = (props) => {

  const [view, changeView] = React.useState('list')


  const textSwitch = () => {
    let textEls = document.getElementsByTagName('h1')
    if (textVisible) {
      for (var i=0; i<textEls.length; i++) {
        textEls[i].style.transform = 'translate(0, 8vh)';
      }
      console.log('hiding text')
      textVisible = false;
    } else {
      for (var j=0; j<textEls.length; j++) {
        textEls[j].style.transform = 'translate(0, 0)';
      }
      console.log('showing text')
      textVisible = true;
    }
  }

  const gridSwitch = () => {
    let gridEls = document.getElementsByClassName('gItemHolder');
    if (gridVisible) {
      for (var i=0; i<gridEls.length; i++) {
        gridEls[i].style.transform = 'scale(0)';
      }
      console.log('hiding grid')
      gridVisible = false;
    } else {
      for (var j=0; j<gridEls.length; j++) {
        gridEls[j].style.transform = 'scale(1)';
      }
      console.log('showing grid')
      gridVisible = true;
    }
  }
  
  // eslint-disable-next-line
  const viewToggle = () => {
    if (view === 'list') {
      textSwitch();
      setTimeout(() => {
        changeView('grid')
        document.getElementById('listCont').style.display = 'none';
        document.getElementById('gridCont').style.display = 'block';
        document.getElementById('GridIcon').style.display = 'none';
        document.getElementById('ListIcon').style.display = 'block';
        // console.log('grid switch')
        setTimeout(() => {
          gridSwitch();
        }, 50)
      }, 500)
    } else if (view === 'grid') {
      gridSwitch();
      setTimeout(() => {
        changeView('list')
        document.getElementById('listCont').style.display = 'block';
        document.getElementById('gridCont').style.display = 'none';
        document.getElementById('GridIcon').style.display = 'block';
        document.getElementById('ListIcon').style.display = 'none';
        // console.log('text switch')
        setTimeout(() => {
          textSwitch();
        }, 50)
      }, 500)
    } else {
      console.log('switch error')
    }
  }

  const ViewOption = () => {

    return (
      <div style={{position: 'relative'}}>
        <div id='listCont' style={{position: 'absolute'}}>{ListView(props)}</div>
        <div id='gridCont' style={{position: 'absolute', display: 'none'}}>{GItemCollection(props)}</div>
      </div>
    )

    // if (view === 'list') {
    //   textSwitch();
    //   return <div key={view}>{ListView(props)}</div>
    // } else if (view === 'grid') {
    //   return <div key={view}>{GItemCollection(props)}</div>
    // } else {
    //   console.log(view)
    //   return <div className='textColour'>error</div>
    // }
  }

    setTimeout(() => {
      textSwitch();
    }, 50)
    return (
      <div id='galleryCont' className='textColour'>
        {/* <button id='viewSwitchBTN' onClick={() => {viewToggle()}}>
          <svg id='buttonSVG' version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000">
            <g id="GridIcon">
              <rect x="62.5" y="62.5" class="st0" width="250" height="250"/>
              <rect x="375" y="62.5" class="st0" width="250" height="250"/>
              <rect x="687.5" y="62.5" class="st0" width="250" height="250"/>
              <rect x="62.5" y="375" class="st0" width="250" height="250"/>
              <rect x="375" y="375" class="st0" width="250" height="250"/>
              <rect x="687.5" y="375" class="st0" width="250" height="250"/>
              <rect x="62.5" y="687.5" class="st0" width="250" height="250"/>
              <rect x="375" y="687.5" class="st0" width="250" height="250"/>
              <rect x="687.5" y="687.5" class="st0" width="250" height="250"/>
            </g>
            <g id="ListIcon">
              <circle class="st0" cx="157.9" cy="187.5" r="95.4"/>
              <circle class="st0" cx="157.9" cy="500" r="95.4"/>
              <circle class="st0" cx="157.9" cy="812.5" r="95.4"/>
              <line class="st1" x1="310.3" y1="187.5" x2="937.5" y2="187.5"/>
              <line class="st1" x1="310.3" y1="500" x2="937.5" y2="500"/>
              <line class="st1" x1="310.3" y1="812.5" x2="937.5" y2="812.5"/>
            </g>
          </svg>
        </button> */}
        {/* <button onClick={() => {gridSwitch()}}>GridAnim</button> */}
        <ViewOption key={view} tag={props.tag}/>
      </div>
    )

}

// GItemCollection()

export default GalleryView;