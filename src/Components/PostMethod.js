import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';

const PostMethod = () => {
   const[name,setName]=useState("")
  //  const[userName,setUserName]=useState("")
   const[email,setEmail]=useState("")
   const dispatch=useDispatch()
   
   
// const handleInputs=()=>{
//   console.log({
//     id:Math.floor(Math.random()*100),
//     name:name,
//     email:email
//   })
//   dispatch()
// }
  
   
  return (
    <div style={{display:"flex",flexDirection:"column",rowGap:"10px"}}>
     <form action="" style={{display:"flex",flexDirection:"column",gap:"30px",alignItems:"center"}}
      
      >
      <TextField id="standard-basic" label="Enter Name" type='text' variant="standard"  style={{width:"30%"}} 
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
      />
      <TextField id="standard-basic" label="Enter Email" type='email' variant="standard"  style={{width:"30%"}}
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
      />
      <Button variant="outlined" onClick={()=>dispatch({ 
        type:"ADD-DATA",
        payload:{
         id:Math.floor(Math.random()*100),
         name:name,
         email:email
  }
      })}>Post</Button>

      </form>
    </div>
  )
}

export default PostMethod
