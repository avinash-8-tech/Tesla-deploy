import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./highlights.css";
import { modelsImg, modelxImg, modelyImg, model3Img, cybertruckdriftImg, cyberCabImg } from '../utils';
gsap.registerPlugin(ScrollTrigger);

const carDetails = [
  {
    id: 1,
    img: modelyImg,
    date: "24 March 2020",
    description: "The Tesla Model Y features a spacious interior, impressive electric range, advanced autopilot, rapid acceleration, a panoramic roof, and top safety ratings."
  },
  {
    id: 2,
    img: modelsImg,
    date: "25 June 2012",
    description: "The Tesla Model S features long electric range, rapid acceleration, luxurious interior, advanced autopilot, high-tech infotainment system, and spacious cabin."
  },
  {
    id: 3,
    img: modelxImg,
    date: "26 September 2015",
    description: "The Tesla Model X features spacious seating for up to seven, impressive electric range, rapid acceleration, advanced safety technology, and distinctive falcon-wing doors."
  },
  {
    id: 4,
    img: model3Img,
    date: "26 November 2017",
    description: "The Tesla Model 3 features an impressive electric range, minimalist interior design, advanced autopilot capabilities, rapid acceleration, and cutting-edge technology integration."
  },
  {
    id: 5,
    img: cybertruckdriftImg,
    date: "30 November 2023",
    description: "Built for toughness, Tesla Cybertruck redefines utility with futuristic design, high endurance, and groundbreaking technology for any adventure."
  },
  {
    id: 6,
    img: cyberCabImg,
    date: "Coming soon!",
    description: "The upcoming Tesla Cybercab will feature a unique design with butterfly doors and no traditional steering wheel or pedals, focusing on full autonomy."
  },
  ];


const Highlights = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, []);

  return (
    <div className="cars-container">
      {carDetails.map((car, index) => (
        <div
          key={car.id}
          className="cars-details"
          ref={(el) => (cardRefs.current[index] = el)}
        >
          <div className="cars-details-div">
            <img className="cars-details-img" src={car.img} alt="cybertruck" />
          </div>
          <div className="cars-intro">
            <h2>{car.date}</h2>
            <p>{car.description}</p>
            <button className="btn">Order Now</button>
            <button className="btn">Demo Drive</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Highlights;
