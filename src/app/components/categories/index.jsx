'use client'
import React from 'react'
import Category from './category'
import { motion } from 'framer-motion'
const Categories = ({searchParams }) => {
    const params = searchParams 
    console.log("params",params )
    const data = [
        {
            img:"/category-icons/coffee.svg",
            title:"Kahvaltı",
        },
        {
            img:"/category-icons/hamburger.svg",
            title:"Öğle Menüsü",
        },
        {
            img:"/category-icons/fork-and-knife.svg",
            title:"Akşam Menüsü",
        },
        {
            img:"/category-icons/fork-and-knife.svg",
            title:"Popüler Menüler",
        },
        {
            img:"/category-icons/coffee.svg",
            title:"İçecekler",
        },
        {
            img:"/category-icons/fork-and-knife.svg",
            title:"Popüler Menüler",
        },
        {
            img:"/category-icons/coffee.svg",
            title:"İçecekler",
        }
    ]
  return (
    <motion.div className='overflow-y-auto' initial={
        { opacity:0,
            translateY:-35,
          
        }
    }
    animate={{
        opacity:1,
        translateY:0,
       
    }} transition={{duration:.4}}>
      
  
    <div className='mt-5 flex md:gap-0 lg:gap-4 overflow-y-auto mb-2'>
    {
        data.map((item,key)=>(
            <Category
            key={key}
            img={item.img}
            title={item.title}
            />           
        ))
    }

   </div>
   </motion.div>
  )
}

export default Categories