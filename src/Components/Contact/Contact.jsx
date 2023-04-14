import React, { useReducer, useState, useRef } from "react";
import "./Contact.scss";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const RECAPTCHA_API_KEY = "6Ld-h4glAAAAAKSg3Rn_2nLuJtgfd_AofLxgRemf";

const DEFAULT_FORM_DATA = {
  name: "",
  email: "",
  company: "",
  title: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const [formData, setFormData] = useReducer((old, update) => ({ ...old, ...update }), DEFAULT_FORM_DATA);
  const recaptchaRef = useRef();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    recaptchaRef.current.execute();
    await axios({
      method: "post",
      url: "https://three57-group-backend.onrender.com/send-mail",
      data: { ...formData, token: recaptchaToken },
      headers: {
        "Content-Type": "application/json",
      },
    });
    setFormData(DEFAULT_FORM_DATA);
  };

  const handleInputChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setFormData({ [name]: value });
  };

  return (
    <section id="contact" className="relative pb-10 overflow-hidden pt-28">
      <div className="container">
        <div className="pr-6 md:w-1/2">
          <form action="" onSubmit={handleFormSubmit}>
            <h2 className="text-4xl font-medium lg:text-5xl">Contact Us</h2>
            <p className="w-4/5 mb-12 text-2xl italic">
              Thank you for your interest in 357 Group. Please fill out the form below to ask a question
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <label className="pt-1 w-40 text-right text-[#5a5151]" htmlFor="name">
                  NAME
                </label>
                <input
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white w-full py-1 border border-[#c6c6c6] pl-2 rounded-md"
                  id="name"
                  placeholder="Name"
                  type="text"
                />
              </div>
              <div className="flex gap-4">
                <label className="pt-1 w-40 text-right text-[#5a5151]" htmlFor="email">
                  EMAIL
                </label>
                <input
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white w-full py-1 border border-[#c6c6c6] pl-2 rounded-md"
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
                  value={formData.company}
                  onChange={handleInputChange}
                  className="bg-white w-full py-1 border border-[#c6c6c6] pl-2 rounded-md"
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
                  value={formData.title}
                  onChange={handleInputChange}
                  className="bg-white w-full py-1 border border-[#c6c6c6] pl-2 rounded-md"
                  id="title"
                  placeholder="Operations Head"
                  type="text"
                />
              </div>
              <div className="flex gap-4">
                <label className="pt-1 w-40 text-right text-[#5a5151]" htmlFor="subject">
                  SUBJECT
                </label>
                <input
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-white w-full py-1 border border-[#c6c6c6] pl-2 rounded-md"
                  id="subject"
                  placeholder="Subject"
                  type="text"
                />
              </div>
              <div className="flex gap-4">
                <label className="pt-1 w-40 text-right text-[#5a5151]" htmlFor="message">
                  MESSAGE
                </label>
                <textarea
                  value={formData.message}
                  onChange={handleInputChange}
                  id="message"
                  className="w-full h-44 py-1 border border-[#c6c6c6] pl-2 rounded-md"
                  placeholder="Message"
                />
              </div>

              <div className="pl-36">
                <ReCAPTCHA sitekey={RECAPTCHA_API_KEY} size="invisible" ref={recaptchaRef} onChange={(token) => setRecaptchaToken(token)} />
                <button className="w-3/5 py-1 text-2xl text-white rounded-md bg-primary">Submit</button>
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
