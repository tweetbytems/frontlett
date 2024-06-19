import { useState } from "react";

import OTPInput from "../../components/OtpInput";
import Button from "../../components/Button";
import RegistrationMessage from "./RegistrationMessage";

const Otp = () => {
  const [Message, setMessage] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center bg-white sm:shadow-2xl px-12 py-10  space-y-3 mt-6 rounded-sm">
      {Message === true ? (
        <RegistrationMessage />
      ) : (
        <>
          <OTPInput />
          <div className="pb-4 cursor-pointer">
            <p>
              Dint receive code? <span className="text-edu-blue">Resend</span>
            </p>
          </div>
          <Button variant="blue" onClick={() => setMessage(true)}>
            Submit{" "}
          </Button>
        </>
      )}
    </div>
  );
};

export default Otp;
