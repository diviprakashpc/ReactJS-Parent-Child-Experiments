import React, { memo, useEffect, useMemo, useState } from 'react'
import Child11 from '../components/Child11';
import Child12 from '../components/Child12';

const Child12Memo = memo(Child12)

const Parent1 = (props) => {
  const [p1, setp1] = useState(0);
  useEffect(() => {
    console.log("Parent 1 Mounted")
    return () =>{
      console.log("Parent 1 unmounted")
    }
  }, [])

  useEffect(() => {
    console.log("Parent 1 Updated due to Props")
  },[props])

  useEffect(() => {
    console.log("Parent 1 Updated")
  },)

  const bigObject = {
    a : 1,
    b : 2,
    c : 3
  }
 

  return (
    <div>
        <button onClick={()=>setp1((p1)=>p1 + 1)}>
            Change P1   {p1}
        </button>
        <Child11 p1 = {p1}/>
        <Child12Memo bigObject = {bigObject}/>
    </div>
  )
}

export default Parent1