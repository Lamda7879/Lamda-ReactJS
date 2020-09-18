import React from 'react';
import {Switch,Route} from 'react-router-dom';

import 'jquery';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Profil from './components/Profil';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Modal from './components/Modal';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/profil" component={Profil} />
        <Route path="/galeri" component={Gallery} />
        <Route component={Default} />
      </Switch>
      <Modal/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
