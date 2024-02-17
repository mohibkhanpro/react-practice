import React, { useEffect, useState } from "react";
import { Button, Spinner, Table } from "react-bootstrap";


const DeleteMethod = () => {
  const [data, setData] = useState([]);
  const[spinner,setSpinner]=useState(false)
  useEffect(() => {
   getList()
  }, []);
  function getList(){
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        setData(resp);
        setSpinner(true)
      });
    });
  }
  function deleteuser(id){
    fetch(`https://jsonplaceholder.typicode.com/users ${id}`,{
      method:"DELETE"
    }).then((result)=>{
      result.json().then((resp)=>{
        console.log(resp)
      })
    })
  }
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h1>Delete data from Api</h1>
      {spinner? <Table striped bordered hover style={{marginBottom:"0"}}>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>User Name</td>
            <td>Email</td>
            <td>Delete</td>
          </tr>
          {data.map((item,i) => {
            return (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td><Button onClick={()=>deleteuser(item.id)}>Delete</Button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>:<Spinner animation="border"/>}
      {/* <Table striped bordered hover style={{marginBottom:"0"}}>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>User Name</td>
            <td>Email</td>
            <td>Delete</td>
          </tr>
          {data.map((item,i) => {
            return (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td><Button onClick={()=>deleteuser(item.id)}>Delete</Button></td>
              </tr>
            );
          })}
        </tbody>
      </Table> */}
    </div>
  );
};

export default DeleteMethod;
