'use client'
import React, { useCallback } from 'react'
import styles from './style.module.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
const Category = ({ title, img }) => {
    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()
   

    const paramsConverter = ()=>{
        const params = new URLSearchParams(searchParams.toString());
        params.set("test2", "5")
        params.set("test", "4")
        console.log("params",params.toString())
        console.log("testtt")
        return params.toString();
        // router.push(pathName+"?"+params.toString())
    }

    const createQueryString = useCallback(
        (name, value) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )
    return (
        <Link href={pathName+"?"+createQueryString("test",title)} scroll={false} className='flex flex-col items-center gap-3 min-w-32 text-center'>
            <img className={styles.category__img} width={40} height={40} alt='alt' src={img}></img>
            <h2 className='font-bold ff-second'>  {title}</h2>
        </Link>
    )
}

export default Category