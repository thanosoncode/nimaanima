"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "../components/Container";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import blob from "../../public/assets/blob-scene-haikei.png";

const TypeFormData = z.object({
  email: z.string().email({ message: "Email is required" }),
  message: z.string().min(1, { message: "Please add your message." }).max(1000),
});

type TypeFormData = z.infer<typeof TypeFormData>;

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [progressMessage, setProgressMessage] = useState("");
  const [showMain, setShowMain] = useState(false);

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
    <div className="mx-auto w-full max-w-[1400px] overflow-hidden md:px-8 lg:px-8">
      <div className="relative h-full w-full">
        <Image
          src={blob}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full"
          onLoadingComplete={() => setShowMain(true)}
        />
        {showMain ? (
          <main>
            <header className="px-2 pt-12 pb-4 sm:px-0">
              <Container>
                <h1 className="pb-4 text-center text-4xl font-thin tracking-wide">
                  Make a special offer or ask us anything like.
                </h1>
                <p className="text-center font-light tracking-wide">
                  Send us your message we will contact you as soon as possible.
                </p>
              </Container>
            </header>
            <Container classes="pb-24">
              <h4 className="pt-4 text-center">{progressMessage}</h4>
              <div className="mt-12">
                <form
                  ref={form}
                  onSubmit={handleSubmit(sendEmail)}
                  className="mx-auto flex w-full flex-col gap-4 px-6 sm:w-[500px]"
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
                      <p className="text-sm text-red-400">
                        {errors.email.message}
                      </p>
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
          </main>
        ) : null}
      </div>
    </div>
  );
};

export default ContactUs;
