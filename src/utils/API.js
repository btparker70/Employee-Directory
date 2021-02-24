import axios from "axios";

const BASEURL = "https://randomuser.me/api/";
const totalEmployees = "?/results=50"

// Export an object with a "search" method that searches the Giphy API for the passed query
// export default {
//   getEmployees: function() {
//     return new Promise((resolve, reject) => {
//       axios
//       .get(BASEURL + totalEmployees)
//       .then(res => {
//         const employees = res.data,
//         const results = employee.map(user => {
//           return {
//             firstName: employee.
//           }
//         })
//       })
//     })
//   }
// }




export default {
  getEmployees: function() {
    return axios.get(BASEURL + totalEmployees);
  }
};
