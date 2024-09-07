import React, { useEffect } from 'react'

const Child12 = (props) => {

  
 useEffect(() => {
    console.log("Child 12 Mounted")
    return () =>{
      console.log("Child 12 unmounted")
    }
 }, [])

 useEffect(() => {
    console.log("Child 12 Updated Due to Props change")
 }, [props])

 useEffect(() => {
    console.log("Child 12 Updated")
 })
 

  return (
    <div>Child12</div>
  )
}

export default Child12