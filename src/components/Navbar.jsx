import React, { useEffect } from 'react'
import "./navbar.css"
import { teslaSvg } from '../utils'
import gsap from 'gsap'

const Navbar = () => {
  useEffect(() => {
    const menu = document.querySelector(".logo p");
    const close = document.querySelector(".links p");

    const tl = gsap.timeline();

    tl.to(".links", {
      top: 0,
      duration: 0.5,
    });

    tl.pause();


    menu.addEventListener("click", () => {
      tl.play();
    });

    close.addEventListener("click", () => {
      tl.reverse();
    });

    return () => {
      menu.removeEventListener("click", () => tl.play());
      close.removeEventListener("click", () => tl.reverse());
    };
  }, []);

  return (
    <div>
      <nav>
        <div className="logo">
          <img src={teslaSvg} alt="logo" />

          <div className="linkshome">
            <a href="">Vechiles</a>
            <a href="">Energy</a>
            <a href="">Charging</a>
          </div>

          <div className="get">
            <button>Get Tesla</button>
            <p>&#8801;</p>
          </div>
        </div>

        <div className="links">
          <a href="#">Vechiles</a>
          <a href="#">Energy</a>
          <a href="#">Charging Station</a>
          <a href="#">Discover</a>
          <a href="#">Shop</a>

          <p>X</p>

          <div className="enquiry">
            <a href="#">Contact Us</a>
            <a href="#">Careers</a>
            <a href="#">Log in to Tesla</a>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Navbar