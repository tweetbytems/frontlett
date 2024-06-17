import React from "react";

const Login = () => {
  return (
    <div className="grid grid-cols-3 h-screen p-0 m-0">
      <div className="col-span-1 col"></div>
      <div className="col-span-1 col text-center mt-36 ">
        <div
          className="
        text-edu-blue text-3xl font-semibold
        "
        >
          <h1>
            Sign in to
            <span className="text-edu-yellow pl-2">Educativ</span>
          </h1>
        </div>
        <div>
          <p className=" mx-auto max-w-[60%] text-xs pt-2">
            To sign in, please, type the email address linked to your educativ
            account
          </p>
        </div>
        <div
          className="mt-10 bg-white shadow-lg
        "
        >
          hi
        </div>
      </div>
      <div className="col-span-1 col"></div>
    </div>
  );
};

export default Login;
