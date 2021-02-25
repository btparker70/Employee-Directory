import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "../../utils/API";
import EmployeeContext from "../../utils/employeeContext"


function Main() {
  const [employees, setEmployees] = useState([]);
  const [filtered, setFiltered] = useState([])
  const [order, setOrder] = useState("A")

  useEffect(() => {
    getEmployees();
    
  }, [])

  function getEmployees() {
    API.getEmployees().then(res => {
      console.log(res);
      setEmployees(res.data.results);
      setFiltered(res.data.results);
    })
    .catch(err => console.log(err))
  }


const renderEmployeeRows = () => {
  const mappedArr = filtered.map((employee) => {
    return (
      <tr key={employee.login.uuid}>
          <td><img src={employee.picture.medium}/></td>
          <td>{employee.name.first} {employee.name.last}</td>
          <td>{employee.phone}</td>
          <td>{employee.email}</td>
          <td>{employee.dob.date}</td>
      </tr>
    );
  });

  return mappedArr;
}

const handleSearch = () => {
  //get the input
  const input = document.querySelector("#search").value.toLowerCase();
  //filter the employee with the input
  const filteredData = employees.filter((employee) => employee.name.first.toLowerCase().indexOf(input) > -1);
  //set the state filtered
  setFiltered(filteredData);
}

const handleSort = () => {
  console.log("clicking", order);
  if (order === "A") {
    let sorrtedArr = filtered;
    sorrtedArr.sort((a, b) => (a.name.first.toLowerCase() > b.name.first.toLowerCase() ? -1 : 1))
    setFiltered(sorrtedArr);
    setOrder("D");
  } else {
    let sorrtedArr = filtered;
    sorrtedArr.sort((a, b) => (a.name.first.toLowerCase() > b.name.first.toLowerCase() ? 1 : -1))
    console.log(sorrtedArr);
    setFiltered(sorrtedArr);
    setOrder("A");
  }
}

  return (
    // <EmployeeContext.Provider value={employees}>
    <div>
      <input id="search" onChange={handleSearch}/>
      <table>
        <tr>
          <th>Image</th>
          <th onClick={handleSort}>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
        {renderEmployeeRows()}
      </table>
    </div>
    // </EmployeeContext.Provider>
  );
}

export default Main;
