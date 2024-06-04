import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    // Passing value by the obj
    <UserContext.Provider value={{ user, setUser }}>
      {/* This has the access to these fvalues */}
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
