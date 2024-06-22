// src/App.js
import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./validate";
import BackButton from "../components/BackButton";

function Level2() {
  const { handleChange, handleSubmit, values, errors, isSubmitting } = useForm(
    submit,
    validate
  );
  const [submitted, setSubmitted] = useState(false);

  function submit() {
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto p-8">
        <h1 className="text-2xl font-bold mb-6">Form Submitted</h1>
        <BackButton/>
        <p>
          <strong>Full Name:</strong> {values.fullName}
        </p>
        <p>
          <strong>Email:</strong> {values.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {values.phone}
        </p>
        <p>
          <strong>Applying for Position:</strong> {values.position}
        </p>
        {(values.position === "Developer" ||
          values.position === "Designer") && (
          <p>
            <strong>Relevant Experience:</strong> {values.experience} years
          </p>
        )}
        {values.position === "Designer" && (
          <p>
            <strong>Portfolio URL:</strong> {values.portfolioUrl}
          </p>
        )}
        {values.position === "Manager" && (
          <p>
            <strong>Management Experience:</strong>{" "}
            {values.managementExperience}
          </p>
        )}
        <p>
          <strong>Additional Skills:</strong>{" "}
          {Object.keys(values.additionalSkills || {})
            .filter((skill) => values.additionalSkills[skill])
            .join(", ")}
        </p>
        <p>
          <strong>Preferred Interview Time:</strong> {values.interviewTime}
        </p>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-100">
      <div className="max-w-lg mx-auto p-8">
        <h1 className="text-2xl font-bold mb-6">Job Application Form</h1>
        <BackButton/>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              onChange={handleChange}
              value={values.fullName || ""}
              className={`w-full p-2 border ${
                errors.fullName && "border-red-500"
              }`}
              required
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={values.email || ""}
              className={`w-full p-2 border ${
                errors.email && "border-red-500"
              }`}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              onChange={handleChange}
              value={values.phone || ""}
              className={`w-full p-2 border ${
                errors.phone && "border-red-500"
              }`}
              required
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="position"
            >
              Applying for Position
            </label>
            <select
              id="position"
              name="position"
              onChange={handleChange}
              value={values.position || ""}
              className={`w-full p-2 border ${
                errors.position && "border-red-500"
              }`}
              required
            >
              <option value="">Select Position</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
            {errors.position && (
              <p className="text-red-500 text-xs mt-1">{errors.position}</p>
            )}
          </div>

          {(values.position === "Developer" ||
            values.position === "Designer") && (
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="experience"
              >
                Relevant Experience (Years)
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                onChange={handleChange}
                value={values.experience || ""}
                className={`w-full p-2 border ${
                  errors.experience && "border-red-500"
                }`}
                required
              />
              {errors.experience && (
                <p className="text-red-500 text-xs mt-1">{errors.experience}</p>
              )}
            </div>
          )}

          {values.position === "Designer" && (
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="portfolioUrl"
              >
                Portfolio URL
              </label>
              <input
                type="url"
                id="portfolioUrl"
                name="portfolioUrl"
                onChange={handleChange}
                value={values.portfolioUrl || ""}
                className={`w-full p-2 border ${
                  errors.portfolioUrl && "border-red-500"
                }`}
                required
              />
              {errors.portfolioUrl && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.portfolioUrl}
                </p>
              )}
            </div>
          )}

          {values.position === "Manager" && (
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="managementExperience"
              >
                Management Experience
              </label>
              <textarea
                id="managementExperience"
                name="managementExperience"
                onChange={handleChange}
                value={values.managementExperience || ""}
                className={`w-full p-2 border ${
                  errors.managementExperience && "border-red-500"
                }`}
                required
              />
              {errors.managementExperience && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.managementExperience}
                </p>
              )}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Additional Skills
            </label>
            <div className="flex flex-wrap gap-4">
              {["JavaScript", "CSS", "Python"].map((skill) => (
                <label key={skill} className="flex items-center">
                  <input
                    type="checkbox"
                    name="additionalSkills"
                    value={skill}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {skill}
                </label>
              ))}
            </div>
            {errors.additionalSkills && (
              <p className="text-red-500 text-xs mt-1">
                {errors.additionalSkills}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="interviewTime"
            >
              Preferred Interview Time
            </label>
            <input
              type="datetime-local"
              id="interviewTime"
              name="interviewTime"
              onChange={handleChange}
              value={values.interviewTime || ""}
              className={`w-full p-2 border ${
                errors.interviewTime && "border-red-500"
              }`}
              required
            />
            {errors.interviewTime && (
              <p className="text-red-500 text-xs mt-1">
                {errors.interviewTime}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded transition duration-1000 ease-in-out transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Level2;
