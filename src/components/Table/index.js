import React, {Component } from "react";
import EmployeeContext from "../../utils/employeeContext";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "../../utils/API";

class Table extends Component {
  
  constructor(props) {
    console.log(props)
    super(props);
  //   this.state = {
  //     students: [
  //       { id: 1, name: "Wasif", age: 21, email: "wasif@email.com" },
  //       { id: 2, name: "Ali", age: 19, email: "ali@email.com" },
  //       { id: 3, name: "Saad", age: 16, email: "saad@email.com" },
  //       { id: 4, name: "name1", age: 25, email: "asad@email.com" },
  //     ],
  //   };
  }

  renderTableHeader() {
    let header = Object.keys(this.props[0]) || Object.keys(this.state.students[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData() {
    console.log(this.props)

    // return this.props.map((employee, index) => {
      
    //   const { image, firstName, lastName, email, phone } = employee; //destructuring
      return (
        <tr key={this.props[0].firstName}>
          {/* <td><img src={this.props[0].image} /></td> */}
          <td>{this.props[0].firstName}</td>
          <td>{this.props[0].lastName}</td>
          <td>{this.props[0].email}</td>
          <td>{this.props[0].phone}</td>
        </tr>
      );
    // });

 
  }

  render() {
    return (
      <div>
        <h1 id="title">Employee Database</h1>
        <table id="students">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
        {/* <p>test {this.state.employees[0].email}</p>
        {console.log(this.state)} */}
      </div>
    );
  }
}

export default Table;
