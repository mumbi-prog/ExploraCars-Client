import React from 'react'
import { Booking } from '@/components'
function page({params}) {
  return (
    <>
    <Booking id={params.id}/>
    </>
  )
}

export default page