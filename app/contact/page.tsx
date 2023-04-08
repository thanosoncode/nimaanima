"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "../components/Container";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type TypeFormData = {
  email: string;
  message: string;
};

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (data: TypeFormData) => {
    console.log(data);
    emailjs
      .sendForm(
        "service_wh4c1jj",
        "template_4x5wobq",
        form.current ?? "",
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
  };

  const schema = z.object({
    email: z.string().email({ message: "Email is required" }),
    message: z
      .string()
      .min(10, { message: "Message should be at least 10 characters." })
      .max(1000),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeFormData>({ resolver: zodResolver(schema) });

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
            onSubmit={handleSubmit(sendEmail)}
            className="flex flex-col gap-4 w-96 mx-auto"
          >
            <fieldset className="flex flex-col">
              <label>Email</label>
              <input
                type="email"
                className="rounded py-2 border border-gray-300 pl-2"
                {...register("email")}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </fieldset>
            <fieldset className="flex flex-col">
              <label>Message</label>
              <textarea
                className="resize-y h-40 border border-gray-300 pl-2"
                {...register("message")}
              />
              {errors.message && <p>{errors.message.message}</p>}
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
