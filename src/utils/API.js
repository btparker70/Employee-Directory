import axios from "axios";

const BASEURL = "https://randomuser.me/api/";
const totalEmployees = "?/results=50&nat=us"

// Export an object with a "search" method that searches the Giphy API for the passed query
// export default {
//   getEmployees: function() {
//     return new Promise((resolve, reject) => {
//       axios
//       .get(BASEURL + totalEmployees)
//       .then(res => {
//         const employees = res.data;
//         const results = employees.results.map(employee => {
//           return {
//             firstName: employee.name.first,
//             lastName: employee.name.last,
//             email: employee.email,
//             phone: employee.cell,
//             image: employee.picture.medium
//           }
//         })
//         // what does this do
//         resolve(results);
        
//       })
//       .catch(err => reject(err))
//     })
//   }
// }

export default {
  getEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=200");
    // .then(() => {
    //   const employees = res.data;
    //     const results = employees.results.map(employee => {
    //       return {
    //         firstName: employee.name.first,
    //         lastName: employee.name.last,
    //         email: employee.email,
    //         phone: employee.cell,
    //         image: employee.picture.medium
    //       }
    //     })
    // });
  }
};
