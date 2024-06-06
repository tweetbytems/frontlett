import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

function getInitialState() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

function checkLoggedIn() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? JSON.parse(isLoggedIn) : false;
}

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(getInitialState);
  const [isLoggedIn, setIsloggedIn] = useState(checkLoggedIn);

  const saveLoggedInUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", true);
    setAuthUser(user);
    setIsloggedIn(true);
  };

  const signOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    setIsloggedIn(false);
    setAuthUser(null);
  };

  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsloggedIn,
    saveLoggedInUser,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
