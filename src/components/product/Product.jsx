import React, { useState } from 'react'
import List from './List'
import {products} from '../../Data'
import './product.css'
import { AnimatePresence } from 'framer-motion'
import Itmes from './Itmes'

const allNavList = ['all', ...new Set(products.map((product)=> product.category ))]

const Product = () => {
    const [productItems, setMenuItems] = useState(products);
    const [navList, setCategories] = useState(allNavList);

    const filterItems = (category) =>{

        if(category==='all'){
            setMenuItems(products);
            return;
        }
        const newProductItems = products.filter(
            (item)=> item.category === category
        );

        setMenuItems(newProductItems);
    }
  return (
    <section className="product section" id="products">
         <h2 className="section__title text-cs">Product Showcase</h2>
        <p className="section__subtitle">
            Our <span>Products</span>
        </p>
        <List list={navList} filterItems={filterItems}/>
        <div className="product__container container grid">
           <AnimatePresence initial={false}> <Itmes productItems={productItems}/></AnimatePresence>
        </div>


        <div className="section__bg-wrapper">
            <span className="bg__title">Product</span>
        </div>
    </section>
  )
}

export default Product