import React from 'react';
import { Link } from 'react-router-dom';
import db from '../db/db.js'
import './gallery.css';

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


function GItemCollection() {
  
  // const history = useHistory();
  // const location = useLocation();

  var gItemsRenderArray = [];
  // console.log(db.galleryItems.length)
  for(var i=0; i<db.galleryItems.length; i++) {
    gItemsRenderArray.push(new gItem(db.galleryItems[i].id,db.galleryItems[i].size,db.galleryItems[i].cover,db.galleryItems[i].title,db.galleryItems[i].date))
  }

  // function handleClick(id) {
  //   history.push('/'+id);
  // }

  return (
    <div className="gItemsContainer">
      {gItemsRenderArray.map((item) => {

        return <Link to={'/'+item.id} key={item.id} id={"gItem"+item.id} 
                  style={{backgroundImage: "url('"+process.env.PUBLIC_URL+item.cover+"')"}}
                  className={"gItemHolder "+item.size}>
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





GItemCollection()

export default GItemCollection;