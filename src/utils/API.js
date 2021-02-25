import axios from "axios";

// Gets employee data 
export default {
  getEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=200");
  }
};
