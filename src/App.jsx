import Header from './components/header.jsx';
import GItemCollection from './components/gallery.jsx';
import Footer from './components/footer.jsx';
import Detail from './components/detail.jsx';
import { useParams, Route } from 'react-router-dom';
import db from './db/db.js';

const App = () => (
  <div style={{height: "100vh"}}>
    <Header />
    <Route path={'/:id'}>
      <GalleryDetail />
    </Route>
    <GItemCollection />
    <Footer />
  </div>
)

function GalleryDetail() {
  // const queryString = window.location.search;
  // const urlParams = new URLSearchParams(queryString);
  // let id = urlParams.get('id');
  
  let { id } = useParams()
  console.log(id)
  
  if(id && Number(id)<db.galleryItems.length){
    return (<Detail detailID = {id} />);
  }else{
    return null;
  }
}

export default App;
