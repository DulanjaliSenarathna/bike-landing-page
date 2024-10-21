import React from 'react'
import {services} from '../../Data'
import { FaArrowRight } from "react-icons/fa";
import shapeTwo from '../../assets/shape-2.png'
import shapeOne from '../../assets/shape-1.png'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './about.css'

const About = () => {
  return (
    <section className="services section" id="about">
        <h2 className="section__title text-cs">What We Do</h2>
        <p className="section__subtitle">
            Our <span>Services</span>
        </p>

        <Swiper 
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
         className="services__container container mySwiper">
            {services.map(({name,title,description}, index)=>{
                return (
                    <SwiperSlide className="services__item card card-one" key={index}>
                        <span className="services__subtitle text-cs">
                            {name}
                        </span>
                        <h3 className="services__title">{title}</h3>
                        <p className="services__description">{description}</p>
                        <a href="#pricing" className="link">See Pricing <FaArrowRight className='link__icon'/></a>
                        <img src={shapeTwo} alt="styled shape image" className="shape c__shape" loading='lazy' />
                    </SwiperSlide>
                )
            })}
        </Swiper>

        <div className="section__bg-wrapper">
            <span className="bg__title">Services</span>
        </div>
    </section>
  )
}

export default About