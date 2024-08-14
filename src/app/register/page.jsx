
'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter()
  const [error,setError] = useState()

    const  handleSubmit = async(e)=>{
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        if(!password || password.length<8){
          setError("Password is invalid.")
          return;
        }
        try {
          // router.push("/login")
          const res = await fetch("/api/register",{
            method:'POST',
            headers:{
              "Content-type":"application/json"
            },
            body:JSON.stringify({
              name,
              email,
              password
            })
          });
         if(res.ok){
          router.push("/login")
         }
        } catch (error) {
          setError("Error,Try again.")
          console.log(error)
        }
    }
    return (
     <div>
      Register Page
      <form className="grid gap-5" onSubmit={handleSubmit}> 
        <label>Name</label>
      <input
      name="name"
      id="name"
    type="text"
    placeholder="Type here"
    className="input input-bordered input-primary w-full max-w-xs" />
      <label>E-posta</label>
     <input
      name="e-mail"
      id="e-mail"
    type="email"
    required
    placeholder="Type here"
    className="input input-bordered input-primary w-full max-w-xs" />
      <label>Password</label>
      <input
       name="password"
      id="password"
    type="password"
    placeholder="Type here"
    className="input input-bordered input-primary w-full max-w-xs" />
    <p className="text-dark">{error}</p>
    <button type="submit">Register</button>
      </form>
     </div>
    );
  }
  