import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden pt-28 pb-10">
      <div className="container">
        <div className="md:w-1/2 pr-6">
          <form action="">
            <h2 className="text-4xl lg:text-5xl font-medium">Contact Us</h2>
            <p className="w-4/5 text-2xl italic mb-12">
              Thank you for your interest in 357 Group. Please fill out the form below to ask a question
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <label className="pt-1 w-40 text-right text-[#5a5151]" htmlFor="name">
                  NAME
                </label>
                <input className="w-full py-1 border border-[#c6c6c6] pl-2 rounded-md" id="name" placeholder="Name" type="text" />
              </div>
              <div className="flex gap-4">
                <label className="pt-1 w-40 text-right text-[#5a5151]" htmlFor="email">
                  EMAIL
                </label>
                <input
                  className="w-full py-1 border border-[#c6c6c6] pl-2 rounded-md"
                  id="email"
                  placeholder="email@company.com"
                  type="email"
                />
              </div>
              <div className="flex gap-4">
                <label className="pt-1 w-40 text-right text-[#5a5151]" htmlFor="company">
                  COMPANY
                </label>
                <input
                  className="w-full py-1 border border-[#c6c6c6] pl-2 rounded-md"
                  id="company"
                  placeholder="Organization Name"
                  type="text"
                />
              </div>
              <div className="flex gap-4">
                <label className="pt-1 w-40 text-right text-[#5a5151]" htmlFor="title">
                  TITLE
                </label>
                <input
                  className="w-full py-1 border border-[#c6c6c6] pl-2 rounded-md"
                  id="title"
                  placeholder="Operations Head"
                  type="text"
                />
              </div>
              <div className="flex gap-4">
                <label className="pt-1 w-40 text-right text-[#5a5151]" htmlFor="subject">
                  SUBJECT
                </label>
                <input className="w-full py-1 border border-[#c6c6c6] pl-2 rounded-md" id="subject" placeholder="Subject" type="text" />
              </div>
              <div className="flex gap-4">
                <label className="pt-1 w-40 text-right text-[#5a5151]" htmlFor="message">
                  MESSAGE
                </label>
                <textarea id="message" className="w-full h-44 py-1 border border-[#c6c6c6] pl-2 rounded-md" placeholder="Message" />
              </div>
              <div className="pl-36">
                <button className="bg-primary text-white rounded-md py-1 w-3/5 text-2xl">Submit</button>
              </div>
            </div>
          </form>
        </div>
        <div className="absolute left-1/2 w-[100%] bg-white h-full top-0 md:block hidden -z-10"></div>
      </div>
    </section>
  );
};

export default Contact;
