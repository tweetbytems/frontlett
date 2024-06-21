import { useState } from "react";

import OTPInput from "../../components/OtpInput";
import Button from "../../components/Button";
import SuccessMessage from "../../components/SuccessMessage";

const Otp = () => {
  const [message, setMessage] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center bg-white sm:shadow-2xl px-12 py-10  space-y-3 mt-6 rounded-sm">
      <OneTimePassword
        text="Sign Up"
        subText="created an account to manage your institution Crescent International School."
        message={message}
        setMessage={setMessage}
      />
    </div>
  );
};

export default Otp;

interface setMessageProps {
  text: string;
  subText: string;
  message: boolean;
  setMessage: (message: boolean) => void;
}

export const OneTimePassword = ({
  text,
  subText,
  message,
  setMessage,
}: setMessageProps) => {
  return (
    <>
      {message ? (
        <SuccessMessage text={text} subText={subText} />
      ) : (
        <div className="flex flex-col justify-center items-center space-y-6">
          <p>Inpute code below</p>
          <div className="relative mb-4">
            <OTPInput />
            <p className="absolute right-0 text-xs">00:59</p>
          </div>
          <div className="cursor-pointer">
            <p>
              Dint receive code?{" "}
              <span
                onClick={() => {}}
                className="text-edu-blue hover:underline"
              >
                Resend
              </span>
            </p>
          </div>
          <Button variant="blue" onClick={() => setMessage(true)}>
            Submit{" "}
          </Button>
        </div>
      )}
    </>
  );
};
