import GalleryView from './gallery';
import Detail from './detail';
import { useParams, Route, Switch } from 'react-router-dom';
import db from '../db/db.json';


function Work() {
  // let match = useRouteMatch();
  // console.log(match)

  return (<div>
    <Switch>
      <Route path={'/work/personal/:id?'}>
        <GalleryDetail />
        <GalleryView tag={ 'personal' } />
      </Route>
      <Route path={'/work/university/:id?'}>
        <GalleryDetail />
        <GalleryView tag={ 'university' } />
      </Route>
      <Route exact path={'/work/:id?'}>
        <GalleryDetail />
        <GalleryView tag={ 'all' }/>
      </Route>
    </Switch>

  </div>)
}


function GalleryDetail() {
  
  // eslint-disable-next-line
  let { id } = useParams()

  let tempID;

  if (id) {
    let fixedTitle = id.replace("/-/g", " ")
    tempID = db.findIndex((x) => x.title === fixedTitle)
  }
  // console.log(id, tempID)
  
  if(id && Number(tempID) < db.length && Number(tempID) >= 0){
    return (<Detail detailID = {tempID} />);
  }else{
    return null;
  }
}

export default Work;