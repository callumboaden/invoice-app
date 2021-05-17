import { useState } from "react";
import { uid } from "uid";

const useInvoiceForm = ({ onSubmit }) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      const status =
        event.nativeEvent.submitter.id === "draft" ? "draft" : "pending";

      const obj = { ...inputs, invoiceId: uid(), invoiceStatus: status };
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
    setInputs,
  };
};
export default useInvoiceForm;
