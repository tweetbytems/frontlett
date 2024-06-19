import { Link } from "react-router-dom";

import { Input } from "../../components/thirdparty/input";
import Button from "../../components/Button";
import GoogleButton from "../../components/GoogleButton";

const GoogleSignUp = () => {
  return (
    <div>
      <form
        onSubmit={() => {}}
        className="flex flex-col justify-center bg-white shadow-2xl px-12 py-10  space-y-3 mt-6  rounded-sm "
      >
        <>
          <p className="text-lg text-gray-400 font-semibold  pt-4">
            School Information
          </p>
          <Input label="School Name" placeholder="" />
          <Input label="School Address" placeholder="" />
          <Input
            label="Position"
            placeholder="Enter your role e.g Head Teacher"
          />
        </>

        <Button variant="blue">Submit</Button>
      </form>
    </div>
  );
};

export default GoogleSignUp;
