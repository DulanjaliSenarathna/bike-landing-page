import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import shapeTwo from '../../assets/shape-2.png';
import { motion } from 'framer-motion';

const Items = ({productItems}) => {
  return (
    <>
    {productItems.map((productItem)=>{
        const {id, img, category, title, description} = productItem;
        return (
            <motion.div
            layout
            animate = {{opacity:1, scale:1}}
            initial = {{opacity:0.8, scale:0.6}}
            exit={{opacity:0.8, scale:0.6}}
            transition={{duration:0.3}}
            className="product__items card card-two" key={id}>
                <div className="product__img-wrapper">
                    <img src={img} alt="bicycle product image" className="product__img" loading='lazy'/>
                </div>
                <span className="product__category text-cs">{category}</span>
                <h3 className="product__title">{title}</h3>
                <p className="product__description">{description}</p>
                <a href="#pricing" className="link">
                    See Pricing
                    <FaArrowRight className='link__icon'></FaArrowRight>

                </a>
                <img src={shapeTwo} alt="styled shape image" className="shape c__shape" loading='lazy'/>
            </motion.div>
        )
    })}
    </>
  )
}

export default Items