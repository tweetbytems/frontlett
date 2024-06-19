import React, { useState, ChangeEvent } from "react";

import PersonalInformation from "./PersonalInformation";
import SchoolInformation from "./SchoolInformation";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleFormDataChange = (data: { [key: string]: string }) => {
    setFormData({ ...formData, ...data });
  };

  return (
    <div className="flex flex-col justify-center bg-white sm:shadow-2xl px-12 py-10  space-y-3 mt-6 sm:mx-32 md:mx-0 rounded-sm ">
      <div>
        {step === 1 && (
          <PersonalInformation
            onNext={handleNextStep}
            onChange={handleFormDataChange}
          />
        )}
        {step === 2 && (
          <SchoolInformation
            onNext={handleNextStep}
            onChange={handleFormDataChange}
          />
        )}
      </div>
    </div>
  );
};

export default SignUp;
