import React from 'react';
import heroImg from '../../assets/hero_bike.png'
import shapeOne from '../../assets/shape-1.png'
import shapeTwo from '../../assets/shape-2.png'
import { FaFacebookF, FaYoutube, FaInstagramSquare  } from "react-icons/fa";
import './home.css'

const Home = () => {
  return (
    <section className='home' id='home'>
        <div className="home__wrapper">
        <div className="home__container container">
            <p className="home__subtitle text-cs">
                Welcome to <span>Your Ultimate Bike Store</span>
            </p>
            <h1 className="home__title text-cs"><span>RIDÉ </span> HUB</h1>
            <p className="home__job">
                <span className="text-cs">Discover </span><b>Top-Quality Bicycles</b>
            </p>

            <div className="home__img-wrapper">
                <div className="home__banner">
                    <img src={heroImg} alt="" className='home__profile' />
                </div>

                <p className="home__data home__data-one">
                    <span className="text-lg">3 <b>+</b></span>
                    <span className="text-sm text-cs">Years of <span>Service</span></span>
                </p>

        

                <img src={shapeOne} className="shape shape__1"/>
                <img src={shapeTwo} className="shape shape__2"/>
                <img src={shapeTwo} className="shape shape__3"/>
            </div>
            <p className="home__text">Based in Sri Lanka, we offer top-quality bicycles crafted for your
                 every adventure. Let’s talk about our unique collection!
            </p>
            <div className="home__socials">
                <a href="" className="home__social-links">
                    <FaFacebookF/>
                </a>
                <a href="" className="home__social-links">
                    <FaYoutube/>
                </a>
                <a href="" className="home__social-links">
                    <FaInstagramSquare/>
                </a>
            </div>

            <div className="home__btns">
                <a download='' className="btn text-cs">Call Us</a>
                <a href="#skills" className="hero__link text-cs">For Order</a>
            </div>
        </div>

        <div className="section__deco deco__left">
            <img src={shapeOne} alt="" className="shape" />
        </div>
        </div>

        <div className="section__bg-wrapper">
            <span className="bg__title">Web Developer</span>
        </div>
    </section>
  )
  
}

export default Home