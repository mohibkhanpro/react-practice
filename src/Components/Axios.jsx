import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axios() {
    const[myData,setMyData]=useState([])
    useEffect (()=>{
axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
// console.log(res.data)
setMyData(res.data)
})
    },[])
  return (
    <div style={{}}>
      {
        myData.slice(0,15).map((post,id)=>{
            return(
                <div key={id} style={{border:"1px solid black"}}>
                <h3 >{post.title.slice(0,5).toUpperCase()}</h3>
                </div>
            )
        })
      }
    </div>
  )
}

export default Axios
