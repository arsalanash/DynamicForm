const validate = (values) => {
    let errors = {};
  
    if (!values.fullName) {
      errors.fullName = 'Full Name is required';
    }
  
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
  
    if (!values.phone) {
      errors.phone = 'Phone Number is required';
    } else if (!/^\d+$/.test(values.phone)) {
      errors.phone = 'Phone Number is invalid';
    }
  
    if (values.position === 'Developer' || values.position === 'Designer') {
      if (!values.experience) {
        errors.experience = 'Relevant Experience is required';
      } else if (values.experience <= 0) {
        errors.experience = 'Experience must be greater than 0';
      }
    }
  
    if (values.position === 'Designer') {
      if (!values.portfolioUrl) {
        errors.portfolioUrl = 'Portfolio URL is required';
      } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.portfolioUrl)) {
        errors.portfolioUrl = 'Portfolio URL is invalid';
      }
    }
  
    if (values.position === 'Manager') {
      if (!values.managementExperience) {
        errors.managementExperience = 'Management Experience is required';
      }
    }
  
    if (!values.additionalSkills || Object.keys(values.additionalSkills).every(key => !values.additionalSkills[key])) {
      errors.additionalSkills = 'At least one skill must be selected';
    }
  
    if (!values.interviewTime) {
      errors.interviewTime = 'Preferred Interview Time is required';
    }
  
    return errors;
  };
  
  export default validate;
  