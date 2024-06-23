import React from "react";
import { Input } from "../components/thirdparty/input";
import Button from "../components/Button";
import { Textarea } from "../components/thirdparty/textarea";

const ContactUs = () => {
  return (
    <div className="w-full p-5 md:px-16 md:py-10 mt-20 grid md:grid-cols-2 gap-4">
      {/* text */}
      <div className="text-center md:text-left text-edu-gray md:p-5">
        <h1 className="font-bold text-4xl text-edu-blue [word-spacing:5px] md:leading-[4rem] leading-[2.5rem]">
          Contact Us
        </h1>
        <p className=" my-8 text-lg  font-normal">
          Need to get in touch with us? Either fill out the form with your
          inquiry or reach us on the contact below.
        </p>

        <div className="flex flex-col my-8 text-lg  font-normal">
          <p>
            Call: <a href="tel:+2349037786705">+234-903-778-6705</a>
          </p>

          <p>
            Support:{" "}
            <a
              href="mailto:educativnigeria@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              educativnigeria@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* contact form */}
      <div className=" flex justify-end ">
        <form className="w-[70%]">
          <div className=" flex flex-col gap-5 bg-white rounded-lg shadow-2xl p-2 sm:p-10">
            <div className="grid md:grid-cols-2 gap-8 ">
              <Input
                id="firstname"
                name="firstname"
                label="First Name"
                type="text"
              />

              <Input
                id="lastname"
                name="lastname"
                label="Last Name"
                type="text"
              />
            </div>

            <Input id="email" name="email" label="Email" type="email" />

            <Textarea
              id="message"
              name="message"
              label="What can i help you with?"
              rows={6}
            />

            <div className="flex w-full md:justify-end">
              <Button variant="blue">Submit</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
