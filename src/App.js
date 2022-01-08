import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Header from './containers/Header';
import ProductListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetails'; 




function App() {


  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
  