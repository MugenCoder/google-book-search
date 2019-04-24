import React, { Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Discover from './components/Discover';
import Search from './components/Search';
import Nav from './components/Nav';

class App extends Component {
  render() {
  return (
   <Router>
     <Route exact path="/" render={
       props => (
         <Fragment>
           <Nav {...props} />
           <Home {...props} />
         </Fragment>
       )
     } />
     <Route exact path="/about" render={
       props => (
         <Fragment>
           <Nav {...props} />
           <About {...props} />
         </Fragment>
       )
     } />
     <Router exact path="/discover" render={
       props => (
         <Fragment>
           <Nav {...props} />
           <Discover {...props} />
         </Fragment>
       )
     } />
     {/* our route will begin with /search but it might look like this with user input:
        search?/ something => "something"
        or /search/something => "something 
         */}
     <Router exact path="/seach:query" render={
       props => {
         <Fragment>
           <Nav {...props} />
           <Search {...props} />
         </Fragment>
       }
     } />
   </Router>
  );
  }
}

export default App;
