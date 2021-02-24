import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import API from "../../utils/API";

function Main() {
  const [employees, setemployees] = useState({});

 // When the component mounts, a call will be made to get random users.
 useEffect(() => {
  populateTable();
  console.log(employees)
}, []);

  function populateTable() {
    API.getEmployees()
      .then(res => setemployees({ employees: res.data }))
      .catch(err => console.log(err));
      
  };

  
  return (
    <div>
      <div className="mt-4">
        <h2>Employee Table</h2>
      </div>
        <Container className="mt-3 px-5">
        </Container>
    </div>
  );
}

export default Main;