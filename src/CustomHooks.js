import { useState, useEffect } from "react";
import { uid } from "uid";

const useInvoiceForm = ({ currentInvoice, onSubmit }) => {
  const [inputs, setInputs] = useState(currentInvoice || {});
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();

      const action = event.nativeEvent.submitter.id;
      const status =
        event.nativeEvent.submitter.id === "draft" ? "draft" : "pending";

      if (action === "edit") {
        onSubmit(inputs, action);
      } else {
        const obj = { ...inputs, invoiceId: uid(), invoiceStatus: status };
        onSubmit(obj);
      }
    }
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    setInputs(currentInvoice);
  }, [currentInvoice]);
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};
export default useInvoiceForm;
