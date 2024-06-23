import React, { createContext, useState, useContext, ReactNode } from "react";

interface User {
  id: string;
  name: string;
}

interface AuthContext {
  authUser: User | null;
  setAuthUser: (user: User | null) => void;
  isLoggedIn: boolean;
  setIsloggedIn: (isLoggedIn: boolean) => void;
  saveLoggedInUser: (user: User) => void;
  signOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}
const AuthContext = createContext<AuthContext | null>(null);

function getInitialState(): User | null {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

function checkLoggedIn(): boolean {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? JSON.parse(isLoggedIn) : false;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authUser, setAuthUser] = useState(getInitialState);
  const [isLoggedIn, setIsloggedIn] = useState(checkLoggedIn);

  const saveLoggedInUser = (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true");
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

  const value: AuthContext = {
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
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
