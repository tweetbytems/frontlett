import React from "react";

const index = () => {
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
              <span>Call: 09037786705</span>
              <span>Support: educativnigeria@gmail.com</span>
            </div>
          </p>
        </div>

        {/* contact form */}
        <div className="flex items-center ">
          <div className="w-full">
            <div className="bg-white border border-edu-gray/10 rounded-lg shadow-2xl p-10">
              <form>
                <div className="grid md:grid-cols-2 gap-8 mb-5">
                  <div className="">
                    <label
                      htmlFor="firstname"
                      className="block mb-2 font-bold text-gray-600"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="lastname"
                      className="block mb-2 font-bold text-gray-600"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      className="border  shadow p-3 w-full rounded mb-"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <div className="">
                    <label
                      htmlFor="email"
                      className="block mb-2 font-bold text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <div className="">
                    <label
                      htmlFor="message"
                      className="block mb-2 font-bold text-gray-600"
                    >
                      What can i help you with?
                    </label>
                    <textarea
                      rows={6}
                      id="message"
                      name="message"
                      className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    />
                  </div>
                </div>
                <div className="flex w-full md:justify-end">
                  <button className="block w-full md:w-1/4  bg-edu-blue text-white font-bold p-4 rounded-lg">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
