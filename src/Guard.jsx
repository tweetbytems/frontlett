import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import { getUserById } from "./services/UserServices";
import { useAuth } from "./services/AuthContext";

const { authUser: user, setAuthUser } = useAuth;

export const useFetchUserData = () => {
  const token = localStorage.getItem("jwt");

  const handleGetUser = async () => {
    try {
      const { userId } = jwtDecode(token);
      const resp = await getUserById(userId);
      const { data } = resp.payload;
      setAuthUser(data?.user);
    } catch (error) {
      throw error;
    }
  };

  return handleGetUser;
};

const Guard = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const fetchUserData = useFetchUserData();
  const token = localStorage.getItem("jwt");

  const handleError = () => {
    navigate("/login");
    window.location.reload();
  };

  const shouldGetProfile = ![
    "/login",
    "/signup",
    "/otp",
    "/",
    "/reset-password/*",
    "/forgot-password",
  ].includes(pathname);

  // useEffect(() => {
  //   if (shouldGetProfile && user?.id) {
  //     fetchUserData();
  //   }
  // }, [shouldGetProfile, user?.id]);

  // useEffect(() => {
  //   if (!user?.id && shouldGetProfile) {
  //     handleError();
  //   }
  // }, [shouldGetProfile, user?.id]);

  useEffect(() => {
    if (shouldGetProfile) {
      if (user) {
        const shouldGetRole = !["admin", "teacher", "student"].includes(
          user.role
        );

        if (shouldGetRole) {
          handleError();
        }
      } else {
        handleError();
      }
    }
  }, [shouldGetProfile, user]);

  return children;
};

export default Guard;
