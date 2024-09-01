
'use client'
import { addCategory, getAllCategory } from '@/lib/actions/category';
import { useEffect, useRef, useState } from 'react';
import {toast } from 'react-toastify';

const Page = () => {
  const [loading,setLoading] = useState(true)
  const [categories,setCategories] = useState([])
  const formRef = useRef(null)
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=>{
  await getAllCategory().then(data=> setCategories(data)).then(()=>setLoading(false))
  }

  const handleSubmit = async(formData)=>{
    const res = await addCategory(formData)
    console.log("res create",res)
    formRef.current?.reset()
    fetchData()
    toast("İşlem başarılı",{
      position:'bottom-right',
      theme:'dark'
    })
  }
  return (
    <div>
      <form action={handleSubmit} ref={formRef}>
        <input
          id="categoryName"
          name="categoryName"
          placeholder="Category Adı"
          required
        />
        <input
          id="fileName"
          name="fileName"
          placeholder="Dosya Adı"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {
     Array.isArray(categories) && categories.length>0 && categories?.map(item=>(
          <div className='flex gap-2' key={item.id}>
            <p>{item.categoryName}</p>
            <p>{item.fileName}</p>
            </div>
        ))
      }
      {
        loading && <p>Loading...</p>
      }
    </div>
  );
}

export default Page;
