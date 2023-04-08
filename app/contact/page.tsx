"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "../components/Container";

const ContactUs = () => {
  const [error, setError] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      const formData = new FormData(e.currentTarget);
      const { name, email, message } = Object.fromEntries(formData) as {
        name: string;
        email: string;
        message: string;
      };

      if (!name || !email || !message) {
        setError("we need all values");
        return;
      }

      emailjs
        .sendForm(
          "service_wh4c1jj",
          "template_4x5wobq",
          e.currentTarget,
          "user_bm37QJFLQoyKqlOoNcG0e"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <header className="bg-lightBlue-400 py-12">
        <Container>
          <h1 className="text-4xl font-thin text-center pb-4 tracking-wide">
            Do you have a question or want to share your ideas?
          </h1>
          <p className="text-center font-light tracking-wide">
            Please fill the form below and we will contact you as soon as
            possible.
          </p>
        </Container>
      </header>
      <Container>
        <div className="mt-12">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-4 w-96 mx-auto"
          >
            <fieldset className="flex flex-col">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="rounded py-2 border border-gray-300 pl-2"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="rounded py-2 border border-gray-300 pl-2"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label>Message</label>
              <textarea
                name="message"
                className="resize-y h-40 border border-gray-300 pl-2"
              />
            </fieldset>
            <button
              type="submit"
              className="bg-black text-white rounded w-full py-2"
            >
              Send message
            </button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default ContactUs;
