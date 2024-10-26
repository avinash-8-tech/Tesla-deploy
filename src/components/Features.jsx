import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom'; // Import Link
import './features.css';
import { chargerimg, powerwallImg, solarpanelImg, solarroofImg, vid } from '../utils';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const animate = useRef();
    const videoRef = useRef(null);
    const textRefs = useRef([]);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page2",
                scroller: "body",
                start: "top top",
                end: "bottom top",
                scrub: 1,
                pin: true,
            },
        });

        tl.fromTo(
            animate.current, 
            { x: "0%" },
            { 
                x: "-100%", 
                duration: 1.5,
                ease: "power2.out"
            }
        );

        textRefs.current.forEach((text) => {
            gsap.fromTo(
                text,
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: text,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div>
            <div className="page1">
                <div className="model-background">
                    <video
                        ref={videoRef}
                        src={vid}
                        type="video/webm"
                        autoPlay
                        muted
                        loop
                    />
                </div>
                <Link to="/models">View Models</Link>
            </div>
            <div className="page2">
                <div className="motive">
                    <h2>The Motive To Save Earth</h2>
                </div>
                <h1 ref={animate}>energy</h1>
            </div>
            <div className="page3">
                <div className="green">
                    <div className="green-img">
                        <img src={solarpanelImg} alt="panel" />
                        <h1 ref={(el) => textRefs.current.push(el)}>Solar Panels</h1>
                        <p ref={(el) => textRefs.current.push(el)}>Schedule a Virtual Consultation</p>
                    </div>
                    <div className="green-img">
                        <img src={solarroofImg} alt="roof" />
                        <h1 ref={(el) => textRefs.current.push(el)}>Solar Roof</h1>
                        <p ref={(el) => textRefs.current.push(el)}>Produce Clean Energy For Your Roof</p>
                    </div>
                </div>
                <div className="green2">
                    <div className="green-img2">
                        <img src={powerwallImg} alt="power" />
                        <h1>Powerwall</h1>
                    </div>
                    <div className="green-img2">
                        <img className="last" src={chargerimg} alt="charger" />
                        <h1>Accessories</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
