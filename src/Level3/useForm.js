import { useState, useEffect } from 'react';

const useForm = (callback, validate, fetchAdditionalQuestions) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (values.topic) {
      fetchAdditionalQuestions(values.topic);
    }
  }, [values.topic, fetchAdditionalQuestions]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      callback();
    }
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;
