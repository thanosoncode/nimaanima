"use client";

import { useState } from "react";
import Fieldset from "./components/Fieldset";
import Container from "../components/Container";
import { useAppState } from "../context";
import { redirect } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const DetailsSchema = z.object({
  email: z.string().email(),
  fullName: z.string(),
  street: z.string(),
  city: z.string(),
  postalCode: z.string(),
});

export type Details = z.infer<typeof DetailsSchema>;

const Order = () => {
  const [details, setDetails] = useState({
    email: "",
    fullName: "",
    street: "",
    postalCode: "",
    city: "",
  });

  const [showDetails, setShowDetails] = useState(false);

  const { cartItems } = useAppState();
  if (cartItems.length === 0) {
    redirect("/products");
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Details>({
    resolver: zodResolver(DetailsSchema),
  });

  const submit = (data: Details) => {
    setShowDetails(true);
  };

  return (
    <Container>
      <h4>Choose your shipping address</h4>
      <form onSubmit={handleSubmit(submit)}>
        <Fieldset
          id="email"
          label="Email*"
          value={details.email}
          handleInputChange={handleInputChange}
          register={register}
        />
        {errors.email ? (
          <span className="tex-sm text-red-400">{errors.email.message}</span>
        ) : (
          <span className="p-3"></span>
        )}
        <Fieldset
          id="fullName"
          label="Full name*"
          value={details.fullName}
          handleInputChange={handleInputChange}
          register={register}
        />
        {errors.fullName ? (
          <span className="tex-sm text-red-400">{errors.fullName.message}</span>
        ) : (
          <span className="p-3"></span>
        )}
        <Fieldset
          id="street"
          label="Street address*"
          value={details.street}
          handleInputChange={handleInputChange}
          register={register}
        />
        {errors.street ? (
          <span className="tex-sm text-red-400">{errors.street.message}</span>
        ) : (
          <span className="p-3"></span>
        )}
        <Fieldset
          id="postalCode"
          label="Postal code*"
          value={details.postalCode}
          handleInputChange={handleInputChange}
          register={register}
        />
        {errors.postalCode ? (
          <span className="tex-sm text-red-400">
            {errors.postalCode.message}
          </span>
        ) : (
          <span className="p-3"></span>
        )}
        <Fieldset
          id="city"
          label="City*"
          value={details.city}
          handleInputChange={handleInputChange}
          register={register}
        />
        {errors.city ? (
          <span className="tex-sm text-red-400">{errors.city.message}</span>
        ) : (
          <span className="p-3"></span>
        )}
        <button type="submit">submit</button>
      </form>
      {showDetails ? (
        <div>
          <p>{details.email}</p>
          <p>{details.fullName}</p>
          <p>{details.street}</p>
          <p>{details.city}</p>
          <p>{details.postalCode}</p>
        </div>
      ) : null}
    </Container>
  );
};
export default Order;
