import { useState } from "react";

const useInvoiceForm = ({ onSubmit }) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      onSubmit(inputs);
    }
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};
export default useInvoiceForm;
