"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "../components/Container";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const TypeFormData = z.object({
  email: z.string().email({ message: "Email is required" }),
  message: z
    .string()
    .min(10, { message: "Message should be at least 10 characters." })
    .max(1000),
});

type TypeFormData = z.infer<typeof TypeFormData>;

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [progressMessage, setProgressMessage] = useState("");

  const sendEmail = async (data: TypeFormData) => {
    setLoading(true);
    setProgressMessage("Sending..");
    try {
      const response = await emailjs.sendForm(
        "service_wh4c1jj",
        "template_4x5wobq",
        form.current ?? "",
        "user_bm37QJFLQoyKqlOoNcG0e"
      );

      if (response.text !== "OK") {
        setLoading(false);
        setProgressMessage(response.text);
        form.current && form.current.reset();
        throw new Error(response.text);
      }
      setLoading(false);
      form.current && form.current.reset();
      setProgressMessage("Message sent successfully!");
      return;
    } catch (error) {
      setLoading(false);
      form.current && form.current.reset();
      setProgressMessage("Something went wrong. Please try again later");
      throw new Error("Something went wrong.");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeFormData>({ resolver: zodResolver(TypeFormData) });

  return (
    <div>
      <header className="bg-someBlue-400 py-12">
        <Container>
          <h1 className="pb-4 text-center text-4xl font-thin tracking-wide">
            Do you have a question or want to share your ideas?
          </h1>
          <p className="text-center font-light tracking-wide">
            Send use a message we will contact you as soon as possible.
          </p>
        </Container>
      </header>
      <Container>
        <h4 className="pt-4 text-center">{progressMessage}</h4>
        <div className="mt-12">
          <form
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
            className="mx-auto flex w-[500px] flex-col gap-4"
          >
            <fieldset className="flex flex-col">
              <label>Message</label>
              <textarea
                className="h-60 resize-y border border-gray-300 pl-2"
                {...register("message")}
              />
              {errors.message && <p>{errors.message.message}</p>}
            </fieldset>

            <fieldset className="flex flex-col">
              <label>Email</label>
              <input
                type="email"
                className="rounded border border-gray-300 py-4 pl-2"
                {...register("email")}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </fieldset>
            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-black py-4 text-white"
              disabled={loading}
            >
              Send message
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
