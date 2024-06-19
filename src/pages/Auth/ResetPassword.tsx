import { Link } from "react-router-dom";

import { Input } from "../../components/thirdparty/input";
import Button from "../../components/Button";
import GoogleButton from "../../components/GoogleButton";

const ResetPassword = () => {
  return (
    <div className="flex flex-col justify-center bg-white sm:shadow-2xl px-12 py-10  space-y-3 mt-6 rounded-sm ">
      <form onSubmit={() => {}} className="flex flex-col space-y-5 ">
        <Input label="New Password" placeholder="Enter New Password" />

        <div>
          <Input
            label="Confirm New Password"
            placeholder=""
            type="Confirm New Password"
          />
        </div>

        <Button variant="blue">Submit</Button>
      </form>
    </div>
  );
};

export default ResetPassword;
