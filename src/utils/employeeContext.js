import React from "react";

const UserContext = React.createContext({
  image: "",
  name: "",
  phone: "",
  email: "",
  DOB: "",
  handleSort: () => undefined
});

export default UserContext;