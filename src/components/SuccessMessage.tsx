import { Link } from "react-router-dom";

import success from "../assets/images/Auth/success.png";

interface SuccessMessageProps {
  text: string;
}

const SuccessMessage = ({ text }: SuccessMessageProps) => {
  return (
    <div className="flex flex-col gap-4 text-sm items-center text-center">
      <h3 className="font-bold ">
        {text}
        <br />
        Successful
      </h3>
      <img src={success} alt="success" className="w-[8rem]" />

      <p>
        Proceed to{" "}
        <Link className="font-semibold" to="/login">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SuccessMessage;
