import { useState } from "react";

import { Input } from "../../components/thirdparty/input";
import Button from "../../components/Button";
import SuccessMessage from "../../components/SuccessMessage";

const ResetPassword = () => {
  const [resetSuccess, SetResetSuccess] = useState(false);

  return (
    <div className="flex flex-col justify-center bg-white sm:shadow-2xl px-12 py-10 space-y-3 mt-6 sm:mx-32 md:mx-0 rounded-sm ">
      {resetSuccess ? (
        <SuccessMessage text="Reset Password" />
      ) : (
        <form
          onSubmit={() => {}}
          className="flex flex-col items-center space-y-5 "
        >
          <Input label="New Password" placeholder="" type="password" />

          <Input label="Confirm New Password" placeholder="" type="password" />

          <Button
            variant="blue"
            onClick={() => {
              SetResetSuccess(true);
            }}
          >
            Submit
          </Button>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
