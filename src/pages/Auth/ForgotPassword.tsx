import { Link, useNavigate } from "react-router-dom";

import { Input } from "../../components/thirdparty/input";
import Button from "../../components/Button";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center bg-white sm:shadow-2xl px-12 py-12 mt-6 rounded-sm ">
      <form
        onSubmit={() => {}}
        className="flex flex-col justify-center items-center space-y-6 "
      >
        <p className="font-semibold">Enter your email address below.</p>
        <Input label="" placeholder="" />

        <Button variant="blue" onClick={() => navigate("/reset-password")}>
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
    </div>
  );
};

export default ForgotPassword;
