import { Link } from "react-router-dom";

import { Input } from "../../components/thirdparty/input";
import Button from "../../components/Button";
import GoogleButton from "../../components/GoogleButton";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col justify-center bg-white sm:shadow-2xl px-12 py-12 mt-6 rounded-sm ">
      <form
        onSubmit={() => {}}
        className="flex flex-col justify-center items-center space-y-6 "
      >
        <Input label="Email" placeholder="" />

        <Button variant="blue">Submit</Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
