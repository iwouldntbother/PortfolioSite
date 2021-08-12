import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import db from '../db/db.js'
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


function GItemCollection(props) {
  
  // let tag = this.props.tag
  // const history = useHistory();
  // const location = useLocation();

  let match = useRouteMatch();
  // console.log(match)

  var gItemsRenderArray = [];
  // console.log(db.galleryItems.length)
  for(var i=0; i<db.galleryItems.length; i++) {
    if (props.tag === "all" || db.galleryItems[i].tag === props.tag) {
      gItemsRenderArray.push(new gItem(db.galleryItems[i].id,db.galleryItems[i].size,db.galleryItems[i].cover,db.galleryItems[i].title,db.galleryItems[i].date))
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

// GItemCollection()

export default GItemCollection;