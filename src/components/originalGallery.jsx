import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import db from '../db/db.json';
import './css/gallery.css';

class gItem{
  // super(){}
  constructor(id, size, cover, title, date) {
    this.id = id;
    this.size = size;
    this.cover = cover;
    this.title = title;
    this.date = date;
  }
}


function GalleryView(props) {
  
  // let tag = this.props.tag
  // const history = useHistory();
  // const location = useLocation();

  let match = useRouteMatch();
  // console.log(match)

  var gItemsRenderArray = [];
  // console.log(db.length)
  for(var i=0; i<db.length; i++) {
    if (props.tag === "all" || db[i].tag === props.tag) {
      gItemsRenderArray.push(new gItem(db[i].id,db[i].size,db[i].cover,db[i].title,db[i].date))
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

// GalleryView()

export default GalleryView;