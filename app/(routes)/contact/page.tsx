"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "../../components/container/Container";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "@/app/components/modal/Modal";

const TypeFormData = z.object({
  email: z.string().email({ message: "Email is required" }),
  message: z.string().min(1, { message: "Please add your message." }).max(1000),
});

type TypeFormData = z.infer<typeof TypeFormData>;

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (data: TypeFormData) => {
    setLoading(true);

    try {
      const response = await emailjs.sendForm(
        "service_wh4c1jj",
        "template_4x5wobq",
        form.current ?? "",
        "user_bm37QJFLQoyKqlOoNcG0e",
      );

      if (response.text !== "OK") {
        setLoading(false);
        form.current && form.current.reset();
        throw new Error(response.text);
      }
      setLoading(false);
      form.current && form.current.reset();
      return;
    } catch (error) {
      setLoading(false);
      form.current && form.current.reset();
      throw new Error("Something went wrong.");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeFormData>({ resolver: zodResolver(TypeFormData) });

  return (
    <Container classes="overflow-hidden ">
      <div className="">
        <header className="mt-6 mb-8 sm:mt-12">
          <Container>
            <h1 className="mb-8 text-center text-4xl font-thin sm:text-5xl">
              We take orders!
              <br />
              Reach out for special offers or custom inquiries
            </h1>
            <p className="text-center font-light">
              Have a specific request or looking for a customized item? Send us
              a message, and we&apos;ll get back to you promptly.
              <br /> Make a special offer or ask us anything &ndash; we&apos;re
              here for you!
            </p>
          </Container>
        </header>
        <Container classes="pb-24">
          <div className="mt-12">
            <form
              ref={form}
              onSubmit={handleSubmit(sendEmail)}
              className="mx-auto flex w-full flex-col gap-4 sm:w-[500px]"
            >
              <fieldset className="flex flex-col">
                <label>Message</label>
                <textarea
                  className="h-60 resize-y border border-gray-300 pl-2"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-sm text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </fieldset>

              <fieldset className="flex flex-col">
                <label>Email</label>
                <input
                  type="email"
                  className="rounded border border-gray-300 py-2  pl-2 sm:py-4"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-red-400">{errors.email.message}</p>
                )}
              </fieldset>
              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-black py-2  text-white sm:py-4"
                disabled={loading}
              >
                Send message
              </button>
            </form>
          </div>
        </Container>
      </div>
      <Modal open={loading}>
        <div className="bg-white px-12 py-6">Sending...</div>
      </Modal>
    </Container>
  );
};

export default ContactUs;
