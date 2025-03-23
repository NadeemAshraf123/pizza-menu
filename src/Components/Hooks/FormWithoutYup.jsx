import React, { useState } from "react";

const FormWithoutYup = () => {
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

    // Validation Function
    const ValidateForm = () => {
        let newErrors = {};

        // First Name Validation
        if (!formData.firstName) {
            newErrors.firstName = "First name is required.";
        } else if (formData.firstName.length < 2) {
            newErrors.firstName = "First name must be at least 2 characters.";
        }

        // Last Name Validation
        if (!formData.lastName) {
            newErrors.lastName = "Last name is required.";
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = "Email is required.";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email format.";
        }

        // Phone Number Validation
        const phoneRegex = /^[0-9]{10}$/;
        if (!formData.phoneNumber) {
            newErrors.phoneNumber = "Phone number is required.";
        } else if (!phoneRegex.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Phone number must be 10 digits.";
        }

        // Password Validation
        if (!formData.password) {
            newErrors.password = "Password is required.";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }

        // Confirm Password Validation
        if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        // Age Validation
        if (!formData.age) {
            newErrors.age = "Age is required.";
        } else if (formData.age <= 0) {
            newErrors.age = "Age must be a positive number.";
        }

        // Gender Validation
        if (!formData.gender) {
            newErrors.gender = "Gender is required.";
        }

        // Date of Birth Validation
        if (!formData.birthDate) {
            newErrors.birthDate = "Date of birth is required.";
        }

        setErrors(newErrors);

        // Return false if there are errors
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = ValidateForm();
        if (isValid) {
            console.log("Form Submitted:", formData);
        } else {
            console.log("Form validation failed:", errors);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
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

export default FormWithoutYup;
