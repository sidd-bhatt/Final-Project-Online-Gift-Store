import './App.css';
import React from "react";
import './Components/Header.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header.js';
import Rform from './Components/Rform';
import Home from './Components/Home';
import Adminform from './Components/Admin';
import LoginFrom from './Components/LoginFrom';
import AdminDashboard from './Components/AdminDashboard';
import CustomerDashboard from './Components/CustomerDashboard';
import ShopkeeperDashboard from './Components/ShopkeeperDashboard';
import AllGifts from './Components/AllGifts';
import Cart from './Components/Cart';
import About from './Components/About';

function App() {
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Registration' element={<Rform/>}/>
        <Route path='/Login' element={<LoginFrom/>}/>
        <Route path='/Admin' element={<Adminform/>}/>
        <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
        <Route path='/CustomerDashboard' element={<CustomerDashboard/>}/>
        <Route path='/ShopkeeperDashboard' element={<ShopkeeperDashboard/>}/>
        <Route path='/allgifts' element={<AllGifts/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
