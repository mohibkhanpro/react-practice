import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';


const Api = () => {
  const [data, setData] = useState([]);
  const[spinner,setSpinner]=useState(false)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        setData(resp);
        setSpinner(true)
      });
    });
  }, []);
  
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h1>Fetch data from Api</h1>
      {spinner?<Table striped bordered hover style={{marginBottom:"0"}}>  
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>User Name</td>
            <td>Email</td>
          </tr>
          {data.map((item,i) => {
            return (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>

      </Table>:      <Spinner animation="border" />
}
      {/* <Table striped bordered hover style={{marginBottom:"0"}}>  
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>User Name</td>
            <td>Email</td>
          </tr>
          {data.map((item,i) => {
            return (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>

      </Table> */}
      {/* <Spinner animation="border" /> */}
    </div>
  );
};

export default Api;
