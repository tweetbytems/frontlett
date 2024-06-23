import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Input } from "../../components/thirdparty/input";
import Button from "../../components/Button";
import { OneTimePassword } from "./SignUp/Otp";

const ForgotPassword = () => {
  const [otp, SetOtp] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center bg-white sm:shadow-2xl px-12 py-10 space-y-3 mt-6 sm:mx-32 md:mx-0 rounded-sm">
      {otp ? (
        <OneTimePassword onNext={() => navigate("/reset-password")} />
      ) : (
        <form
          onSubmit={() => {}}
          className="flex flex-col justify-center items-center space-y-6 "
        >
          <p className="font-semibold">Enter your email address below.</p>
          <Input label="" placeholder="" />

          <Button
            variant="blue"
            onClick={() => {
              SetOtp(true);
            }}
          >
            Send Code
          </Button>
          <span className="text-center">
            <p className="text-sm pt-2">
              Go back to{" "}
              <Link className="font-semibold" to="/login">
                Login
              </Link>
            </p>
          </span>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
