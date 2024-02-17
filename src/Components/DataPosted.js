import React, { useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';

function DataPosted() {
    // const[prevData,setPrevData]=useState(data)
    const data=useSelector((state)=>{
        return state
    })
    const[prevData,setPrevData]=useState([])

    const removeList=(id)=>{
        const newList=prevData.filter((l)=>l.id!==id)
        setPrevData(newList)
        
    }
  return (
    <div>
      {
        data.map((e,id)=>{
            return(
                <>
                <List key={id} className='listtt'  style={{marginTop:"30px",backgroundColor:"white"}}>
              
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={()=>removeList(e.id)}>
                    <DeleteIcon 
                    />
                  </IconButton>
                }
              >
               
                <ListItemText
                  primary={e.name}
                />
                <ListItemText
                  primary={e.email}
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

export default DataPosted
