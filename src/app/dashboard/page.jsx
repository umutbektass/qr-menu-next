'use client'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import React from 'react'

const page = () => {
  const {data} = useSession()
  console.log("asıl data",data)
  // console.log("data",session)
  return (
    <div>dashboard page</div>
  )
}

export default page