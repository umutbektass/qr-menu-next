
'use client'

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState()
  const { data, status } = useSession()
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value
    const password = e.target[1].value
    if (!password || password.length < 8) {
      setError("Password is invalid.")
      return;
    }
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    }); 
    console.log("res",res)
    if (res?.error) {
      console.log("res",res)
      setError(res?.error)
    }
    else {
      // res.url ile geldiği url bilgisi alabilirsin.
      setError("")
      router.replace("/dashboard")
    }
  }
  return (
    <div>
      LoginPage
      <form className="grid gap-5" onSubmit={handleSubmit}>
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
        <p className="text-red">{error}</p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
