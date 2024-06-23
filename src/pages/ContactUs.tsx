import React from "react";
import { Input } from "../components/thirdparty/input";
import Button from "../components/Button";
import { Textarea } from "../components/thirdparty/textarea";

const ContactUs = () => {
  return (
    <div className="w-full p-5 md:px-16 md:py-10">
      <div className="grid md:grid-cols-2 gap-4 ">
        {/* text */}
        <div className="text-center md:text-left text-edu-gray md:p-5">
          <h1 className="font-semibold md:text-5xl text-4xl text-edu-blue [word-spacing:5px] md:leading-[4rem] leading-[2.5rem]">
            Contact Us
          </h1>
          <p className=" my-8 text-lg  font-normal">
            Need to get in touch with us? Either fill out the form with your
            inquiry or reach us on the contact below.
          </p>
          <p className=" my-8 text-lg  font-normal">
            Need to get in touch with us? Either fill out the form with your
            inquiry or reach us on the contact below.
          </p>
          <p className=" my-8 text-lg  font-normal">
            <div className="flex flex-col">
              <span>Call: <a href="tel:+2349037786705">+2349037786705</a></span>
              <span>Support:  <a href="mailto:educativnigeria@gmail.com" rel="noopener noreferrer" target="_blank" >educativnigeria@gmail.com</a></span>
            </div>
          </p>
        </div>

        {/* contact form */}
        <div className="flex items-center ">
          <div className="w-full">
            <div className="bg-white border border-edu-gray/10 rounded-lg shadow-2xl p-2 sm:p-10">
              <form>
                <div className="grid md:grid-cols-2 gap-8 mb-5">

                  <Input id="firstname" name="firstname" label="First Name" type="text" />


                  <Input id="lastname" name="lastname" label="Last Name" type="text" />
                </div>
                <div className="mb-5">
                  <Input id="email" name="email" label="Email" type="email" />
                </div>
                <div className="mb-5">
                  <Textarea id="message" name="message" label="What can i help you with?" rows={6} />
                </div>
                <div className="flex w-full md:justify-end">
                  <Button variant="blue">Submit</Button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
