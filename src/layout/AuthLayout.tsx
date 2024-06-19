import { Outlet, useLocation } from "react-router-dom";

import Footer from "../components/layout/Footer";

const AuthLayout = () => {
  const email = "crescent@gmail.com"; //dummy dynamic email

  const { pathname } = useLocation();

  return (
    <>
      <div className="md:grid md:grid-cols-8 lg:grid-cols-3">
        <div className="col-span-2 lg:col-span-1"></div>

        <div className="col-span-4 lg:col-span-1 my-16 sm:my-12 ">
          <div className="text-edu-blue text-lg sm:text-4xl  font-bold">
            <h1 className="text-center ">
              {pathname === "/login"
                ? "Sign In"
                : pathname === "/signup"
                ? "Sign Up"
                : pathname === "/google-signup"
                ? "Google"
                : pathname === "/forgot-password"
                ? "Forgot"
                : pathname === "/reset-password"
                ? "Reset"
                : pathname === "/otp"
                ? "Enter"
                : ""}
              {pathname === "/login"
                ? " to"
                : pathname === "/signup"
                ? " to"
                : ""}

              <span className="text-edu-yellow pl-2">
                {pathname === "/login"
                  ? "Educativ"
                  : pathname === "/signup"
                  ? "Educativ"
                  : pathname === "/google-signup"
                  ? "Sign Up"
                  : pathname === "/forgot-password"
                  ? "Password"
                  : pathname === "/reset-password"
                  ? "Password"
                  : pathname === "/otp"
                  ? "OTP"
                  : ""}
              </span>
            </h1>
          </div>

          <div>
            <p className="mx-auto max-w-[80%] md:max-w-[70%] text-sm pt-2 text-center">
              {pathname === "/login"
                ? "To sign in, please, type the email address linked to your educativ account"
                : pathname === "/signup"
                ? "Only Primary, Secondary and International schools are expected to sign up!"
                : pathname === "/forgot-password"
                ? "Please, enter the email you used in registering your institution!"
                : pathname === "/reset-password"
                ? `Please, enter the code sent to the ${email}`
                : pathname === "/otp"
                ? `Please, enter the 4 digit code sent to the ${email}`
                : ""}
            </p>
          </div>

          <Outlet />
        </div>

        <div className="col-span-2 lg:col-span-1"></div>
      </div>

      <Footer />
    </>
  );
};

export default AuthLayout;
