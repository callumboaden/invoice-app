import { useState } from "react";
import { uid } from "uid";

const useInvoiceForm = ({ onSubmit }) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      const obj = { ...inputs, invoiceId: uid() };
      onSubmit(obj);
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
