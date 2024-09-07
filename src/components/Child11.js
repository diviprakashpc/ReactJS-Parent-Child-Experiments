import React, { useEffect } from 'react'

const Child11 = (props) => {

 const { p1 } = props

 useEffect(() => {
    console.log("Child 11 Mounted")
    return () =>{
      console.log("Child 11 unmounted")
    }
 }, [])

 useEffect(() => {
    console.log("Child 11 Updated due to prop change")
 }, [props])

 useEffect(() => {
    console.log("Child 11 Updated")
 })

  return (
    <div>Child11</div>
  )
}

export default Child11