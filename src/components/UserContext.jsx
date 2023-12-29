import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) setUser(token);
  }, []);
  const data = {
    user,
    setUser,
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export default UserContext;
export { UserProvider };
