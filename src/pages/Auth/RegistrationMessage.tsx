import React from "react";
import { NavLink } from "react-router-dom";

import Button from "../../components/Button";

const RegistrationMessage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2>Congratulations Admin!</h2>
      <p>
        You have succesfully created an account to manage your institution{" "}
        <span className="font-bold"> Crescent International School.</span>{" "}
        Please, login to access your institutions management console
      </p>

      <NavLink to="/login">
        <Button variant="blue" className="w-full">
          Login
        </Button>
      </NavLink>
    </div>
  );
};

export default RegistrationMessage;
