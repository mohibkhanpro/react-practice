import React, { useState } from 'react'
import ContactForm from './ContactForm'
import { Pivot as Hamburger } from 'hamburger-react'
function Contact() {
   const[toggle,setToggle]=useState(true)
   const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
     <div onClick={handleToggle}>
        <Hamburger direction="right" />
      </div>
{
    toggle?<ContactForm/>:null
}
      
    </div>
  )
}

export default Contact
