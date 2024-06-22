import React, { useState, useEffect } from "react";
import axios from "axios";
import useForm from "./useForm";
import validate from "./validate";
import BackButton from "../components/BackButton";

const Level3 = () => {
  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate,
    fetchAdditionalQuestions
  );

  const [submitted, setSubmitted] = useState(false);

  function submit() {
    setSubmitted(true);
  }

  function fetchAdditionalQuestions(topic) {
    // Here i have done a mock API call
    // we can do actual API call if we have the API
    axios
      .get(`https://api.example.com/questions?topic=${topic}`)
      .then((response) => {
        setAdditionalQuestions(response.data.questions);
      })
      .catch((error) => {
        console.error("Error fetching additional questions:", error);
      });
  }

  return (
    <div className="h-screen  bg-gray-100">
      <div className="max-w-lg mx-auto p-8">
        <h1 className="text-2xl font-bold mb-6">Survey Form</h1>
        <BackButton/>
        {submitted ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">Form Submitted</h2>
            <p>
              <strong>Full Name:</strong> {values.fullName}
            </p>
            <p>
              <strong>Email:</strong> {values.email}
            </p>
            <p>
              <strong>Survey Topic:</strong> {values.topic}
            </p>

            {values.topic === "Technology" && (
              <>
                <p>
                  <strong>Favorite Programming Language:</strong>{" "}
                  {values.favoriteLanguage}
                </p>
                <p>
                  <strong>Years of Experience:</strong> {values.experience}{" "}
                  years
                </p>
              </>
            )}
            {values.topic === "Health" && (
              <>
                <p>
                  <strong>Exercise Frequency:</strong>{" "}
                  {values.exerciseFrequency}
                </p>
                <p>
                  <strong>Diet Preference:</strong> {values.dietPreference}
                </p>
              </>
            )}
            {values.topic === "Education" && (
              <>
                <p>
                  <strong>Highest Qualification:</strong> {values.qualification}
                </p>
                <p>
                  <strong>Field of Study:</strong> {values.fieldOfStudy}
                </p>
              </>
            )}
            <p>
              <strong>Feedback:</strong> {values.feedback}
            </p>

            {additionalQuestions.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mt-4">
                  Additional Questions:
                </h3>
                {additionalQuestions.map((question, index) => (
                  <p key={index}>
                    <strong>{question}</strong>
                  </p>
                ))}
              </div>
            )}
          </div>
        ) : (
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
              <label className="block text-sm font-medium mb-1" htmlFor="topic">
                Survey Topic
              </label>
              <select
                id="topic"
                name="topic"
                onChange={handleChange}
                value={values.topic || ""}
                className={`w-full p-2 border ${
                  errors.topic && "border-red-500"
                }`}
                required
              >
                <option value="">Select Topic</option>
                <option value="Technology">Technology</option>
                <option value="Health">Health</option>
                <option value="Education">Education</option>
              </select>
              {errors.topic && (
                <p className="text-red-500 text-xs mt-1">{errors.topic}</p>
              )}
            </div>

            {values.topic === "Technology" && (
              <>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="favoriteLanguage"
                  >
                    Favorite Programming Language
                  </label>
                  <select
                    id="favoriteLanguage"
                    name="favoriteLanguage"
                    onChange={handleChange}
                    value={values.favoriteLanguage || ""}
                    className={`w-full p-2 border ${
                      errors.favoriteLanguage && "border-red-500"
                    }`}
                    required
                  >
                    <option value="">Select Language</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                    <option value="C#">C#</option>
                  </select>
                  {errors.favoriteLanguage && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.favoriteLanguage}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="experience"
                  >
                    Years of Experience
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
                    <p className="text-red-500 text-xs mt-1">
                      {errors.experience}
                    </p>
                  )}
                </div>
              </>
            )}

            {values.topic === "Health" && (
              <>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="exerciseFrequency"
                  >
                    Exercise Frequency
                  </label>
                  <select
                    id="exerciseFrequency"
                    name="exerciseFrequency"
                    onChange={handleChange}
                    value={values.exerciseFrequency || ""}
                    className={`w-full p-2 border ${
                      errors.exerciseFrequency && "border-red-500"
                    }`}
                    required
                  >
                    <option value="">Select Frequency</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Rarely">Rarely</option>
                  </select>
                  {errors.exerciseFrequency && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.exerciseFrequency}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="dietPreference"
                  >
                    Diet Preference
                  </label>
                  <select
                    id="dietPreference"
                    name="dietPreference"
                    onChange={handleChange}
                    value={values.dietPreference || ""}
                    className={`w-full p-2 border ${
                      errors.dietPreference && "border-red-500"
                    }`}
                    required
                  >
                    <option value="">Select Preference</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Non-Vegetarian">Non-Vegetarian</option>
                  </select>
                  {errors.dietPreference && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.dietPreference}
                    </p>
                  )}
                </div>
              </>
            )}

            {values.topic === "Education" && (
              <>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="qualification"
                  >
                    Highest Qualification
                  </label>
                  <select
                    id="qualification"
                    name="qualification"
                    onChange={handleChange}
                    value={values.qualification || ""}
                    className={`w-full p-2 border ${
                      errors.qualification && "border-red-500"
                    }`}
                    required
                  >
                    <option value="">Select Qualification</option>
                    <option value="High School">High School</option>
                    <option value="Bachelor's">Bachelor's</option>
                    <option value="Master's">Master's</option>
                    <option value="PhD">PhD</option>
                  </select>
                  {errors.qualification && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.qualification}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="fieldOfStudy"
                  >
                    Field of Study
                  </label>
                  <input
                    type="text"
                    id="fieldOfStudy"
                    name="fieldOfStudy"
                    onChange={handleChange}
                    value={values.fieldOfStudy || ""}
                    className={`w-full p-2 border ${
                      errors.fieldOfStudy && "border-red-500"
                    }`}
                    required
                  />
                  {errors.fieldOfStudy && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.fieldOfStudy}
                    </p>
                  )}
                </div>
              </>
            )}

            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="feedback"
              >
                Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                onChange={handleChange}
                value={values.feedback || ""}
                className={`w-full p-2 border ${
                  errors.feedback && "border-red-500"
                }`}
                required
                rows="4"
              />
              {errors.feedback && (
                <p className="text-red-500 text-xs mt-1">{errors.feedback}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-1000 ease-in-out transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Level3;
