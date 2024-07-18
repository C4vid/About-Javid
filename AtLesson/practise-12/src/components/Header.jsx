import React from 'react'
import Image1 from '../images/sea.jpeg'
const Header = () => {
  return (
    <div className='Header'>
      <nav  class="navbar navbar-expand-lg p-0 ">
        <div class="header-navbar container-fluid ">
            <a style={{color: "#fff", fontSize: "35px"}} class="navbar-brand px-5" href="#">Travel.co</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">  </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="nav justify-content-end ms-auto px-5 ">
                    <li class="nav-item">
                        <a style={{color: "#fff"}} class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a style={{color: "#fff"}} class="nav-link" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a style={{color: "#fff"}} class="nav-link" href="#">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a style={{color: "#fff"}} class="nav-link" href="#">Page1</a>
                    </li>
                    <li class="nav-item">
                        <a style={{color: "#fff"}} class="nav-link" href="#">Page2</a>
                    </li>

                </ul>
            </div>
        </div>
      </nav>
      <div style={{}} className="header-text">
        <h1>Travel</h1>
        <p>Here are my favorite travel and adventure quotes, paired with images from my journeys around the world.</p>
        <button className="btn btn-primary">Read More</button>
      </div>
    </div>
  )
}

export default Header
