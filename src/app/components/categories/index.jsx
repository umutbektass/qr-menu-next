import React from 'react'
import Category from './category'

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
  )
}

export default Categories