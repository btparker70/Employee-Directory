import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "../../utils/API";
import "./style.css";

function Main() {
  // State variable and their functions
  const [employees, setEmployees] = useState([]);
  const [filtered, setFiltered] = useState([])
  const [order, setOrder] = useState("A")

  // On mount for getting api data
  useEffect(() => {
    getEmployees();
  }, [])

  // Gets employee data from api
  function getEmployees() {
    API.getEmployees().then(res => {
      setEmployees(res.data.results);
      setFiltered(res.data.results);
    })
    .catch(err => console.log(err))
  }

// Creates rows of employees and their data
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

// Search function
const handleSearch = () => {
  //get the input
  const input = document.querySelector("#search").value.toLowerCase();
  //filter the employee with the input
  const filteredData = employees.filter((employee) => employee.name.first.toLowerCase().indexOf(input) > -1);
  //set the state filtered
  setFiltered(filteredData);
}

// Sort function
const handleSort = () => {
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
  // Table header and body for render
  return (
    <div>
      <h1 id="title">Employee Database</h1>
      <input id="search" onChange={handleSearch}/>
      <table id="employees">
        <tbody>
        <tr>
          <th>Image</th>
          <th onClick={handleSort}>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
        {renderEmployeeRows()}
        </tbody>
      </table>
    </div>
  );
}

export default Main;