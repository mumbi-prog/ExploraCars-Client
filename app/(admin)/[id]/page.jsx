import React from 'react'

// export const page = ({params}) => {
//     //fetch all the cars
//     //filter the cars based on the id you get from the onclick event
//     //filter based on the params.id
//   return (
//     <div>page</div>
//   )
// }
// import React from 'react'

export default function page({params}) {
    //fetch all the cars, store in a state
    // const [cars, setCars]= useState([])
    //filter the cars, to render only the car with a matching id
    //route show (return a specific car)
    // fetch using the params.id
    console.log(params)
  return (
    <div>{params.id}</div>
  )
}
