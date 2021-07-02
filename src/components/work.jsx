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
  // console.log(id)
  
  if(id && Number(id)<db.galleryItems.length){
    return (<Detail detailID = {id} />);
  }else{
    return null;
  }
}

export default Work;