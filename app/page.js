'use client'
import { getCurrentUser } from "@/lib"


export default function Home() {
  const user = getCurrentUser

  return (
    <>
      <h1>Hello from Home {user? user.full_name:""}</h1>
    </>
  )
}
