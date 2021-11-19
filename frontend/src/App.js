import HomeScreen from './screens/HomeScreen';
import './App.css';
import React from 'react';


import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

// import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="grid-container">
          <header className="row">
            <div>
              <NavLink to="/" className="brand" exact={true}><a>FlipCarT</a></NavLink>
            </div>
            <div className="d">
              <NavLink to="/" exact={true} strict><i className="fa fa-shopping-cart"></i></NavLink>
              <NavLink to="/" exact={true} strict><i className="fa fa-user-circle"></i></NavLink>
            </div>
          </header>

          <main>
            <Route path="/" component={HomeScreen} exact={true} strict></Route>

          </main>

          <footer className="row center">
            <div>
              &copy; CopyRights By Eswar
            </div>
            <div>Shopping</div>
            <div>SiteMap</div>
          </footer>

        </div>
      </Router>
    </React.Fragment >
  );
}
export default App;
