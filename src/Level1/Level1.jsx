// src/EventRegistrationForm.js
import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";

const Level1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    attendingWithGuest: "No",
    guestName: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { name, email, age, attendingWithGuest, guestName } = formData;
    const newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!age) {
      newErrors.age = "Age is required";
    } else if (isNaN(age) || age <= 0) {
      newErrors.age = "Age must be a number greater than 0";
    }
    if (attendingWithGuest === "Yes" && !guestName) {
      newErrors.guestName = "Guest Name is required";
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
    }
  };

  const { name, email, age, attendingWithGuest, guestName } = formData;

  return (
    <div className="h-screen  bg-gray-100">
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Event Registration Form</h1>
        <BackButton/>
        {submitted ? (
          <div>
            <h2 className="text-xl font-semibold mb-2">Form Submitted</h2>
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Age:</strong> {age}
            </p>
            <p>
              <strong>Attending with Guest:</strong> {attendingWithGuest}
            </p>
            {attendingWithGuest === "Yes" && (
              <p>
                <strong>Guest Name:</strong> {guestName}
              </p>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium">Name:</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block font-medium">Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block font-medium">Age:</label>
              <input
                type="number"
                name="age"
                value={age}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.age && (
                <p className="text-red-500 text-sm mt-1">{errors.age}</p>
              )}
            </div>
            <div>
              <label className="block font-medium">
                Are you attending with a guest?
              </label>
              <select
                name="attendingWithGuest"
                value={attendingWithGuest}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            {attendingWithGuest === "Yes" && (
              <div>
                <label className="block font-medium">Guest Name:</label>
                <input
                  type="text"
                  name="guestName"
                  value={guestName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                {errors.guestName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.guestName}
                  </p>
                )}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-400 text-white p-2 rounded-md hover:bg-blue-600 transition duration-1000 ease-in-out transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Level1;
