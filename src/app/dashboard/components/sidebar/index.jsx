import React from 'react'
import style from './styles.module.css'
import Link from 'next/link'
import { TbCategory } from "react-icons/tb";
import { IoFastFoodOutline } from "react-icons/io5";

const Sidebar = () => {
  const sideItems = [
    {
      title:"Categori Ekle",
      icon:<TbCategory/>,
      href:"/dashboard/category"
    },
    {
      title:"Yiyecek & İçicek Ekle",
      icon:<IoFastFoodOutline />,
       href:"/dashboard/menu"
    }
  ]
  return (
    <div className='fixed px-3'>
      {
        sideItems.map((item,key)=>(
          <Link className={`flex items-center gap-2 mb-9`} href={item.href} scroll={false} key={key} id={style.sideItem}>
             {item.icon}
            <h2>{item?.title}</h2>
            </Link>
        ))
      }
    </div>
  )
}

export default Sidebar