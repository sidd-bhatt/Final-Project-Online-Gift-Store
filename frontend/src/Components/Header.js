import React, { useEffect, useState } from 'react'

import './Header.css';

export default function Header() {
  const [uname, setuname] = useState("Please Login");

  useEffect(() =>{
  if(sessionStorage.getItem("fname") !== null){
    setuname("Welcome " + sessionStorage.getItem("fname"));
  }
  })
  

  const logoutsession = (e) => {
    e.preventDefault()
    sessionStorage.clear();
    window.location.replace("/");
  }

  return (
  <>
    <div id="headdiv" >
        <div style={{float:'right', marginRight:'10px', marginTop:'12px'}}>
        <h3 style={{float:'left', marginRight:'10px'}}>{uname}</h3>
        <button type='button' class='btn btn-danger' onClick={logoutsession} >LOGOUT</button>
        </div>
        <h1>GIFT STORE</h1>
    </div>
    <div id="navdiv">
        <nav>
            <a class="navAncher" href="/">HOME</a>
            <a class="navAncher" href="/about">ABOUT</a>
            <a class="navAncher" href="allgifts">ALL GIFTS</a>
            <a class="navAncher" href="/Registration">REGISTER</a>
            <a class="navAncher" href="/Login">LOGIN</a>
            <a class="navAncher" href="cart">CART</a>
            <a class="navAncher" href="/Admin">ADMIN</a>
    </nav>
    </div>
    </>
  )
}
