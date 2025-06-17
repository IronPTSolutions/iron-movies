import { createContext, useContext } from "react";
import { useLocation } from "react-router";
import { useUser } from "../hooks/use-user";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const location = useLocation();

  const { user, loading } = useUser();

  if (loading && location.pathname !== "/login") {
    return "Loading...";
  }

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
