import  React, { useState } from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import uuid4 from "uuid4";

function ContactForm() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[list,setList]=useState([])
   
    const handleInputs=()=>{
        if(name===""||email===""){
            alert("Fill All Details")
        }
        else{
            setName("")
            setEmail("")
        }
        const inputData={name,email}
        if(name&&email){
            setList((ls)=>[...ls,{id:uuid4(),inputData}])
        }
        console.log(list)

    }
    const removeList=(id)=>{
        const newList=list.filter((l)=>l.id!==id)
        setList(newList)
    }
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Contact form</h1>

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
      <Button variant="outlined" onClick={handleInputs}>Add Contact</Button>

      </form>
      {
        list.map((a,idd)=>{
            return(
                <>
                <List key={idd} className='listtt'  style={{marginTop:"30px",backgroundColor:"white"}}>
              
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon onClick={()=>removeList(a.id)}
                    />
                  </IconButton>
                }
              >
               
                <ListItemText
                  primary={a.inputData.name}
                />
                <ListItemText
                  primary={a.inputData.email}
                />
              </ListItem>
            
          </List>
                </>
            )
        })
      }
    </div>
  )
}

export default ContactForm
