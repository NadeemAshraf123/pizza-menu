import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define Yup validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

export default function MyForm() {
  // Destructuring useForm
  const {
    register,   // Connects input fields
    handleSubmit,  // Handles form submission & validation
    formState: { errors },  // Holds validation errors
  } = useForm({
    resolver: yupResolver(schema), // Integrates Yup validation
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input {...register("name")} placeholder="Enter your name" />
        <p>{errors.name?.message}</p>
      </div>

      <div>
        <label>Email</label>
        <input {...register("email")} placeholder="Enter your email" />
        <p>{errors.email?.message}</p>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
