import React,{useState} from "react";
import { Button } from "react-bootstrap";
import "./FormValidation.css"

const FormValidation = () => {
    const [user,setuser]=useState("")
    const [password,setPassword]=useState("")
    const [usererr,setUserErr ] = useState(false)
    const [passErr,setPassErr ] = useState(false)


    function submiHandler(event){
        if(user.length||password.length<3){
            alert("Invalid Data")
        }
        else{
            alert("All Good :)")
        }
        event.preventDefault()
    }
    
    function userHandler(event){
        let userValue= event.target.value;
        if(userValue.length<3)
        {
            setUserErr(true)
        }
        else if(userValue.length===0){
            setUserErr(false)
        }
        else{
            setUserErr(false)
        }
        setuser(userValue)
    }

  function passHandler(event){
    let passValue= event.target.value
    if(passValue.length<3){
        setPassErr(true)   
    }
    else if(passValue.length===0){
            setPassErr(false)
        }
    else{
        setPassErr(false)
    }

    setPassword(passValue)
  }

  return (
    <div >
      <h1>Form Validation</h1>
      <form action="" onSubmit={submiHandler}>
        <input type="text" onChange={userHandler} value={user} /> <br />
        {usererr?<span>Invalid User</span>:""}
        
        <input type="password" onChange={passHandler} value={password}  /><br />
        {passErr?<span>Invalid Password</span>:""}
        <button>log In</button><br />
        <Button onClick={()=>alert("hello")}>Log In</Button><br />
        <Button variant="link"><a href="https://www.google.co.uk/">Google</a></Button><br />
        
      </form>
    </div>
  );
};

export default FormValidation;



