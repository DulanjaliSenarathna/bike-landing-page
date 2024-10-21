import React from 'react'
import shapeTwo from '../../assets/shape-2.png'
import './pricing.css'
import { FaCheck , FaArrowRight} from 'react-icons/fa'
import shapeOne from '../../assets/shape-1.png'

const Pricing = () => {
  return (
    <section className="pricing section" id="call">
        <h2 className="section__title text-cs">Pricing</h2>
        <p className="section__subtitle">
            Our <span>Price Board</span>
        </p>

        <div className="pricing__container container grid">
            <div className="pricing__item card card-one">
                <span className="pricing__subtitle text-cs">Road Bike</span>
                <h3 className="pricing__price">39 <span>$</span></h3>
                <p className="pricing__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis nesciunt asperiores quae obcaecati officia ratione illum! Cumque quisquam quis sapiente quae. Incidunt modi doloremque repudiandae voluptate officia aperiam repellendus voluptates.</p>
                <ul className="pricing__list">
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Low Maintenance</span>
                    </li>
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Accessible</span>
                    </li>

                    <li className="list__item">
                        
                        <del>Compact</del>
                    </li>
                    <li className="list__item">
                    <del>Lightweight</del>
                    </li>
                </ul>

                <a href="" className="btn pricing__btn text-cs">
                    Order Now
                    <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
                </a>

                <img src={shapeTwo} alt='styled shape image' className="shape c__shape" loading='lazy'/>
            </div>

            <div className="pricing__item-wrapper">
                <span className="pricing__label text-cs">Popular</span>
            <div className="pricing__item card card-one">
                <span className="pricing__subtitle text-cs">Hybrid Bike</span>
                <h3 className="pricing__price">259 <span>$</span></h3>
                <p className="pricing__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis nesciunt asperiores quae obcaecati officia ratione illum! Cumque quisquam quis sapiente quae. Incidunt modi doloremque repudiandae voluptate officia aperiam repellendus voluptates.</p>
                <ul className="pricing__list">
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Eco-Friendly</span>
                    </li>
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Health Boosting</span>
                    </li>

                    <li className="list__item">
                    <FaCheck className='list__icon'></FaCheck>
                        <span>Cost-Effective</span>
                    </li>
                    <li className="list__item">
                    <del>Versatile</del>
                    </li>
                </ul>

                <a href="" className="btn pricing__btn text-cs">
                    Order Now
                    <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
                </a>

                <img src={shapeTwo} alt='styled shape image' className="shape c__shape" loading='lazy' />
            </div>
            </div>

            <div className="pricing__item card card-one">
                <span className="pricing__subtitle text-cs">Mountain Bike</span>
                <h3 className="pricing__price">1,249 <span>$</span></h3>
                <p className="pricing__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis nesciunt asperiores quae obcaecati officia ratione illum! Cumque quisquam quis sapiente quae. Incidunt modi doloremque repudiandae voluptate officia aperiam repellendus voluptates.</p>
                <ul className="pricing__list">
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Versatile</span>
                    </li>
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Health Boosting</span>
                    </li>

                    <li className="list__item">
                    <FaCheck className='list__icon'></FaCheck>
                        <span>Attractive</span>
                    </li>
                    <li className="list__item">
                    <FaCheck className='list__icon'></FaCheck>
                    <span>Easy to Maintain</span>
                    </li>
                </ul>

                <a href="" className="btn pricing__btn text-cs">
                    Order Now
                    <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
                </a>

                <img src={shapeTwo} alt='styled shape image' className="shape c__shape" loading='lazy'/>
            </div>

           
        </div>

     
        <div className="section__bg-wrapper">
            <span className="bg__title">Pricing</span>
        </div>
    </section>
  )
}

export default Pricing