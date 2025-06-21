import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const currentUserKey = "currentUser";
const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(self.localStorage.getItem(currentUserKey) ? 
    JSON.parse(self.localStorage.getItem(currentUserKey)) : undefined
  );

  const login = (user) => {
    self.localStorage.setItem(currentUserKey, JSON.stringify(user));
    setUser(user);
  }

  const logout = () => {
    self.localStorage.removeItem(currentUserKey);
    setUser(undefined);
    navigate("/login");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
