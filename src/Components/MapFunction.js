import React from "react";

import Table from "react-bootstrap/Table";

const MapFunction = () => {
  const students = [
    {
      name: "Mohib",
      email: "mohib@gamil.com",
      number: 111,
    },
    {
      name: "Faizan",
      email: "faizan@gamil.com",
      number: 222,
    },
    {
      name: "Moiz",
      email: "moiz@gamil.com",
      number: 333,
    },
  ];

  // eslint-disable-next-line array-callback-return

  return (
    <div>
      <Table striped bordered hover>
        
        <thead>
          <tr>
            <th>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {students.map((data, i) => {
            return (
              <tr key={i}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.number}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default MapFunction;