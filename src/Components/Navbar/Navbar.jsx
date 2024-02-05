import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
// import IMG from './name.jpg'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark height-10   fixed-top ">
   <div className='container'>
   
   <li>
    <Link class="navbar-brand" to={'/#/'}>Start Framework </Link>
    </li>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
     
        <li class="nav-item">
          <Link class="nav-link" to={'Home'}>ABOUT</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={'About'}>PORTFOLIO</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={'Gallery'}>CONTACT</Link>
        </li>
      </ul>
     
    </div>
 
  </div>

 
  </nav>
  
  )
    
 
}


      
