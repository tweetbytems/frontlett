import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import { getUserById } from "./services/UserServices";
import { useAuth } from "./context/AuthContext";

interface GuardProps {
  children: React.ReactNode;
}

type FetchUserData = () => Promise<void>;

interface JwtPayload {
  userId: string;
}
export const useFetchUserData = (): FetchUserData => {
  const { setAuthUser } = useAuth();
  const token = localStorage.getItem("token");

  const handleGetUser: FetchUserData = async () => {
    const fetchUserData = async () => {
      try {
        if (token !== null) {
          const decodedToken = jwtDecode<JwtPayload>(token);
          const resp = await getUserById(decodedToken.userId);
          const { data } = resp.payload;
          setAuthUser(data?.user);
        } else {
          // Handle the case where token is null
          throw new Error("Token not found in localStorage");
        }
      } catch (error) {
        throw error;
      }
    };
  };

  return handleGetUser;
};

const Guard: React.FC<GuardProps> = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const fetchUserData = useFetchUserData();
  const token = localStorage.getItem("token");
  const { authUser: user } = useAuth();

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
    // if (shouldGetProfile) {
    //   if (user) {
    //     const shouldGetRole = !["admin", "teacher", "student"].includes(
    //       user.role
    //     );
    //     if (shouldGetRole) {
    //       handleError();
    //     }
    //   } else {
    //     handleError();
    //   }
    // }
  }, [shouldGetProfile, user]);

  return children;
};

export default Guard;
