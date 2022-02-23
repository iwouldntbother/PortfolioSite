import Header from './components/header.jsx';
// import Footer from './components/footer.jsx';
import work from './components/work'
import about from './components/about'
import contact from './components/contact'
// import welcome from './components/welcome'
// eslint-disable-next-line
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (<div style={{height: "100vh"}}>
    <Header />
    
    <Switch>
      <Route exact path='/'>
        <Redirect to='/work' />
      </Route>
      <Route path={'/work'} component={work} />
      <Route exact path={'/about'} component={about} />
      <Route exact path={'/contact'} component={contact} />
    </Switch>


    {/* <Footer /> */}
  </div>)

}


export default App;
