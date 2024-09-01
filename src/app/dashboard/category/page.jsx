'use client'
import React, { useEffect, useState } from 'react'
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"

import { addCategoryFile ,getAllCategory} from '@/lib/actions/category'
import Loading from '@/app/components/loading'
const Page = () => {
    const [categories,setCategories] = useState([])
    const [loading,setLoading] = useState(true)

    const formAction = async (evet) => {
        const formData = new FormData()
        formData.append('categoryName',evet.get('categoryName'))
        formData.append('file',evet.get('file'))
        const res = await addCategoryFile(formData)
        console.log("res",res)
        fetchData()
    }
    const fetchData = async()=>{
        await getAllCategory().then(data=>setCategories(data)).then(()=>setLoading(false))
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
    <form className='flex gap-3 items-center flex-wrap' action={formAction}>
        <Input className="focus:ring-5 w-11/12 sm:w-56"  name='categoryName' id='categoryName' type='text' required />
        <input name='file' id='file' type='file' required/>
        <Button  variant="outline" type="submit">Gönder</Button>

    </form>
    <div className='flex  flex-wrap gap-5 mt-12 justify-center sm:justify-start'>
       {
        (Array.isArray(categories) || categories.length>0)   && !loading &&  categories.map((item)=>(
            <div className='max-w-56 h-56 border-2 rounded-md p-2 ' key={item.id} style={{borderColor:'#192435'}}>
                <p className='text-center mb-3'>{item.categoryName}</p>
                <img className='w-11/12 object-cover rounded-2xl'  src={item.fileName}></img>
                </div>
        )) 
       }
       { !loading && categories.length<1 &&  <p>Data bulunamadı.</p>}
       {
        loading && <Loading/>
       }
    </div>
    </div>
  )
}

export default Page