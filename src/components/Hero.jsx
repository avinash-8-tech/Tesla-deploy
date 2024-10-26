import React from 'react';
import "./hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from 'swiper/modules';


import { Slider_img } from '../utils';
import { Slider_img2 } from '../utils';

const Hero = () => {


    const slides = [
        { id: 1, image: Slider_img,},
        { id: 2, image: Slider_img2,},
    ];

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
                clickable: true,
                dynamicBullets: true,
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div className="slide-content">
                        <img src={slide.image} alt={`Slide ${slide.id}`} className="slide-image" />
                        <p className="slide-caption">We Are Tesla</p>
                        <button className="slide-button">Join Now</button>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Hero;