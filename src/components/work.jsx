import GItemCollection from './gallery';
import Detail from './detail';
import { useParams, Route, Switch } from 'react-router-dom';
import db from '../db/db.js';


function Work() {
  // let match = useRouteMatch();
  // console.log(match)
  return (<div>
    <Switch>
      <Route path={'/work/personal/:id?'}>
        <GalleryDetail />
        <GItemCollection tag={ 'personal' } />
      </Route>
      <Route path={'/work/university/:id?'}>
        <GalleryDetail />
        <GItemCollection tag={ 'university' } />
      </Route>
      <Route exact path={'/work/:id?'}>
        <GalleryDetail />
        <GItemCollection tag={ 'all' }/>
      </Route>
    </Switch>

  </div>)
}


function GalleryDetail() {
  
  // eslint-disable-next-line
  let { id } = useParams()
  let fixedTitle = id.replace("/-/g", " ")
  let tempID = db.galleryItems.findIndex((x) => x.title === fixedTitle)
  // console.log(id, tempID)
  
  if(id && Number(tempID) < db.galleryItems.length && Number(tempID) >= 0){
    return (<Detail detailID = {tempID} />);
  }else{
    return null;
  }
}

export default Work;