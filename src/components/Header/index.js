import React, {Component, useContext } from "react";
import EmployeeContext from "../../utils/employeeContext";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "../../utils/API";

function Header() {
  const {employees, handleSort} = useContext(EmployeeContext);
 

  const renderTableHeader = () => {
    let header = employees.keys(this.state.employees[0]) || Object.keys(this.state.employees[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }
  return (
    <tr>
    <th>Image</th>
    <th onClick={handleSort}>Name</th>
    <th>Phone</th>
    <th>Email</th>
    <th>DOB</th>
  </tr>
  )
}

export default Header;