// context/AuthContext.js

import React, { createContext, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
