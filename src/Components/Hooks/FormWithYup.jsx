import React, { useState } from "react";
import * as Yup from 'yup';

const FormWithYup = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        age: "",
        gender: "",
        interests: [],
        birthDate: "",
    });

    const [errors, setErrors] = useState({});

    const validationSchema = Yup.object({

        firstName:Yup.string().required("First name is required"),
        lastName:Yup.string().required("Last name is required"),
        email:Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
        phoneNumber: Yup.string().matches(/^\d{10}$/,"Phone Number must be 10 digits").required(),
        password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one symbol"
    )
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match")
  .required("Confirm password is required"),
  age: Yup.number().typeError("Age must be a number ")
  .min(18, "You must be at least 18 years old")
  .max(100, "You cannot be older than 100 years")
  .required("Age is required"),
  gender: Yup.string().required("Gender is required"),
  interests: Yup.array()
  .min(1, "Select at least one interest")
  .reqired("Select at least one interest"),
  birthDate: Yup.date().required("Date of birth is required"),
    })

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await validationSchema.validate(formData, {abortEarly: false});
            console.log("Form Submitted", formData);
        } catch (error) {
            console.log(error); 
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === "age" ? parseInt(value) || "" : value,
        });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        let updatedInterests = [...formData.interests];
        if (checked) {
            updatedInterests.push(name);
        } else {
            updatedInterests = updatedInterests.filter(
                (interest) => interest !== name
            );
        }
        setFormData({
            ...formData,
            interests: updatedInterests,
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="container-fluid text-center mb-4 bg-light"
        >
            <div className="mb-4">
                <label htmlFor="">First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    placeholder="Enter your first name..."
                    onChange={handleChange}
                />
                {errors.firstName && (
                    <div style={{ color: "red" }}>{errors.firstName}</div>
                )}
            </div>

            <div className="mb-4">
                <label>Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    placeholder="Enter your last name..."
                    onChange={handleChange}
                />
                {errors.lastName && (
                    <div style={{ color: "red" }}>{errors.lastName}</div>
                )}
            </div>

            <div className="mb-4">
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Enter your email..."
                    onChange={handleChange}
                />
                {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
            </div>

            <div className="mb-4">
                <label>Phone Number:</label>
                <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    placeholder="Enter your phone number..."
                    onChange={handleChange}
                />
                {errors.phoneNumber && (
                    <div style={{ color: "red" }}>{errors.phoneNumber}</div>
                )}
            </div>

            <div className="mb-4">
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Enter your password..."
                    onChange={handleChange}
                />
                {errors.password && (
                    <div style={{ color: "red" }}>{errors.password}</div>
                )}
            </div>

            <div className="mb-4">
                <label>Confirm Password:</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    placeholder="Confirm your password..."
                    onChange={handleChange}
                />
                {errors.confirmPassword && (
                    <div style={{ color: "red" }}>{errors.confirmPassword}</div>
                )}
            </div>

            <div className="mb-4">
                <label>Age:</label>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    placeholder="Enter your age..."
                    onChange={handleChange}
                />
                {errors.age && <div style={{ color: "red" }}>{errors.age}</div>}
            </div>

            <div className="mb-4">
                <label>Gender:</label>
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                {errors.gender && (
                    <div style={{ color: "red" }}>{errors.gender}</div>
                )}
            </div>

            <div className="mb-4">
                <label>Interests:</label>
                <label>
                    <input
                        type="checkbox"
                        name="coding"
                        checked={formData.interests.includes("coding")}
                        onChange={handleCheckboxChange}
                    />
                    Coding
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="sports"
                        checked={formData.interests.includes("sports")}
                        onChange={handleCheckboxChange}
                    />
                    Sports
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="reading"
                        checked={formData.interests.includes("reading")}
                        onChange={handleCheckboxChange}
                    />
                    Reading
                </label>
            </div>

            <div className="mb-4">
                <label>Date of Birth:</label>
                <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    placeholder="Enter your birth date..."
                    onChange={handleChange}
                />
                {errors.birthDate && (
                    <div style={{ color: "red" }}>{errors.birthDate}</div>
                )}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default FormWithYup;

