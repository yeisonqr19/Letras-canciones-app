import { useState } from "react";
import PropTypes from "prop-types";

export const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const reset = () => {
    setFormValues(initialState);
  };

  return {
    formValues,
    handleInputChange,
    reset,
  };
};

useForm.propTypes = {
  initialState: PropTypes.object.isRequired,
};
