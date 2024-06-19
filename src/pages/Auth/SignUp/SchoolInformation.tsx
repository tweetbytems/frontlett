import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "../../../components/thirdparty/input";
import Button from "../../../components/Button";

interface SchoolInformationProps {
  onNext: () => void;
  onChange: (data: { [key: string]: string }) => void;
}

const SchoolInformation: React.FC<SchoolInformationProps> = ({
  onNext,
  onChange,
}) => {
  const [formData, setFormData] = useState({
    organization: "",
    phoneNumber: "",
    message: "",
  });

  const navigate = useNavigate();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    onChange({ [name]: value });
  };

  return (
    <div onSubmit={() => {}} className="flex flex-col justify-center gap-2">
      <>
        <p className="text-lg text-gray-400 font-semibold">
          School Information
        </p>
        <Input label="School Name" placeholder="Enter school name" />
        <Input label="School Address" placeholder="Enter school address" />
        <Input
          label="Position"
          placeholder="Enter your role e.g Head Teacher"
        />
      </>

      <Button
        variant="blue"
        onClick={() => {
          navigate("/otp");
        }}
      >
        Create Account
      </Button>
    </div>
  );
};

export default SchoolInformation;
