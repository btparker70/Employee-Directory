import React from "react";
import Table from "../Table";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Container(props) {
  return (
    <div className="jumbotron card-container">
      <Table {...props}/>
    </div>
  );
}

export default Container;
