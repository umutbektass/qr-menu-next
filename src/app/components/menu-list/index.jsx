'use client'
import React from 'react'
import { motion } from 'framer-motion'
const MenuList = ({ params, menuItems }) => {
  // {params.test}
  return (
    <motion.div initial={
      { opacity:0,
          translateY:35,
        
      }
  }
  animate={{
      opacity:1,
      translateY:0,
     
  }} transition={{duration:.4, delay:.5}}>
   
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3'>
      {
        menuItems.map((menu, menuIndex) => (
          <div key={menuIndex} className='flex items-center p-5 gap-5'>
            <img className='h-20 object-contain	' src={`/menu-item/${menu.img}.jpg`} width={80} height={80} alt={menu.title}/>
            <div className='w-full'>
              <section className='flex justify-between'>
              <h2 className='ff-second font-extrabold text-xl'>{menu.title}</h2>
              <p className='text-orange-400 ff-second font-extrabold text-xl	'>${menu.price}</p>
              </section>
              <span className='h-0.5 w-full bg-slate-300 block	my-2'></span>
              <section className='flex  gap-x-2  flex-wrap	'> 
              {
                menu.ingredientsList.map((ingredient,ingredientIndex)=>(
                      <p className=' text-md ff-primary leading-2' key={ingredientIndex} style={{color:'#666565'}}>{ingredient}</p>
                ))
              }
                </section>
            
              </div>
            
          </div>
        ))
      }
    </div>
    </motion.div>
  )
}

export default MenuList