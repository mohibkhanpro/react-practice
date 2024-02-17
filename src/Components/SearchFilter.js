import React, { useState } from 'react'
import userData from '../Data/userdata.json'
import SearchFilterDiv from './SearchFilterDiv'
import { Button } from 'react-bootstrap'
function SearchFilter() {
    const[name,setName]=useState('')
    const[visible,setVisible]=useState(12)
    // eslint-disable-next-line array-callback-return
    let searchData=userData.filter((item)=>{
        // eslint-disable-next-line eqeqeq
        if(name==""){
            return item
        }
        else if(item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())){
            return item
        }
    })
    const lodemore=()=>{
      setVisible((prevValue)=>
        prevValue+50
      )
    }
  return (
    <div className='search-div'>
      <h1>search filter</h1>
      <input className='search-input' type="text" name="" id="" placeholder='Search name...' value={name} onChange={(e)=>{
        setName(e.target.value)
      }}/>
      <div style={{width:"80vw",display:"flex",flexWrap:"wrap",gap:'10px',marginTop:"22px",justifyContent:"center"}}>
      {
        searchData.slice(0,visible).map((item,i)=>{
            return(
                <div key={i} className='abc' style={{textAlign:"center",width:"24%",}} >
                    <SearchFilterDiv data={item}/>
                </div>
            )
        })
      }

     
        <Button onClick={lodemore}>Load More</Button>
      
      </div>
      
    </div>
  )
}

export default SearchFilter
