import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "../../utils/API";
import EmployeeContext from "../../utils/employeeContext"


function Main() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
    // console.log(employees)
  }, [])

  function getEmployees() {
    API.getEmployees().then(employees => {
      setEmployees(employees);
    })
    .catch(err => console.log(err))
  }
// res.data.results[0].name.first
//res.data.results[0].picture.thumbnail
// res.data.results[0].phone
//res.data.results[0].email

  return (
    // <EmployeeContext.Provider value={employees}>
    <div>
      <div className="mt-4">
        <h2>Employee Table</h2>
      </div>
        <Container className="mt-3 px-5" {...employees}/>
    </div>
    // </EmployeeContext.Provider>
  );
}

export default Main;
