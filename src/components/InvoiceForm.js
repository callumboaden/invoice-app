import React from "react";
import useInvoiceForm from "../CustomHooks";
import "./InvoiceForm.css";

export default function InvoiceForm({
  handleDrawer,
  formDrawerIsOpen,
  invoices,
  setInvoices,
}) {
  const addInvoice = (inputs) => {
    setInvoices((invoices) => [inputs, ...invoices]);
  };

  const { inputs, handleInputChange, handleSubmit } = useInvoiceForm({
    onSubmit: (inputs) => {
      handleDrawer(false);
      addInvoice(inputs);
    },
  });

  const isFormOpen = formDrawerIsOpen ? "active" : "";

  return (
    <form className={`InvoiceForm ${isFormOpen}`} onSubmit={handleSubmit}>
      <h2>New Invoice</h2>
      <h3>Bill From</h3>
      <div className="InvoiceForm-item">
        <label htmlFor="billerStreetAddress">Street Address</label>
        <input
          type="text"
          name="billerStreetAddress"
          id="billerStreetAddress"
          onChange={handleInputChange}
          value={inputs.billerStreetAddress}
          required
        />
      </div>
      <div className="InvoiceForm-group">
        <div className="InvoiceForm-item">
          <label htmlFor="billerCity">City</label>
          <input
            type="text"
            name="billerCity"
            id="billerCity"
            onChange={handleInputChange}
            value={inputs.billerCity}
            required
          />
        </div>
        <div className="InvoiceForm-item">
          <label htmlFor="billerPostcode">Postcode</label>
          <input
            type="text"
            name="billerPostcode"
            id="billerPostcode"
            onChange={handleInputChange}
            value={inputs.billerPostcode}
            required
          />
        </div>
        <div className="InvoiceForm-item">
          <label htmlFor="billerCountry">Country</label>
          <input
            type="text"
            name="billerCountry"
            id="billerCountry"
            onChange={handleInputChange}
            value={inputs.billerCountry}
            required
          />
        </div>
      </div>
      <h3>Bill To</h3>
      <div className="InvoiceForm-item">
        <label htmlFor="clientName">Client's Name</label>
        <input
          type="text"
          name="clientName"
          id="clientName"
          onChange={handleInputChange}
          value={inputs.clientName}
          required
        />
      </div>
      <div className="InvoiceForm-item">
        <label htmlFor="clientEmail">Client's Email</label>
        <input
          type="text"
          name="clientEmail"
          id="clientEmail"
          onChange={handleInputChange}
          value={inputs.clientEmail}
          required
        />
      </div>
      <div className="InvoiceForm-item">
        <label htmlFor="clientStreetAddress">Street Address</label>
        <input
          type="text"
          name="clientStreetAddress"
          id="clientStreetAddress"
          onChange={handleInputChange}
          value={inputs.clientStreetAddress}
          required
        />
      </div>
      <div className="InvoiceForm-group">
        <div className="InvoiceForm-item">
          <label htmlFor="clientCity">City</label>
          <input
            type="text"
            name="clientCity"
            id="clientCity"
            value={inputs.clientCity}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="InvoiceForm-item">
          <label htmlFor="clientPostcode">Postcode</label>
          <input
            type="text"
            name="clientPostcode"
            id="clientPostcode"
            value={inputs.clientPostcode}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="InvoiceForm-item">
          <label htmlFor="clientCountry">Country</label>
          <input
            type="text"
            name="clientCountry"
            id="clientCountry"
            onChange={handleInputChange}
            value={inputs.clientCountry}
            required
          />
        </div>
      </div>
      <div className="InvoiceForm-group">
        <div className="InvoiceForm-item">
          <label htmlFor="clientInvoiceDate">Invoice Date</label>
          <input
            type="date"
            name="clientInvoiceDate"
            id="clientInvoiceDate"
            value={inputs.clientInvoiceDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="InvoiceForm-item">
          <label htmlFor="clientPaymentTerms">Payment Terms</label>
          <select
            name="clientPaymentTerms"
            id="clientPaymentTerms"
            value={inputs.clientPaymentTerms}
            onChange={handleInputChange}
            required
          >
            <option value="net-30-days">Net 30 Days</option>
          </select>
        </div>
      </div>
      <div className="InvoiceForm-item">
        <label htmlFor="clientInvoiceDescription">Project Description</label>
        <input
          type="date"
          name="clientInvoiceDescription"
          id="clientInvoiceDescription"
          onChange={handleInputChange}
          value={inputs.clientInvoiceDescription}
          required
        />
      </div>
      <h3>Item List</h3>
      <div className="InvoiceForm-group">
        <div className="InvoiceForm-item">
          <label htmlFor="clientItemName">Item Name</label>
          <input
            type="text"
            name="clientItemName"
            id="clientItemName"
            onChange={handleInputChange}
            value={inputs.clientItemName}
            required
          />
        </div>
        <div className="InvoiceForm-item">
          <label htmlFor="clientItemQuantity">Quantity</label>
          <input
            type="number"
            name="clientItemQuantity"
            id="clientItemQuantity"
            onChange={handleInputChange}
            value={inputs.clientItemQuantity}
            required
          />
        </div>
        <div className="InvoiceForm-item">
          <label htmlFor="clientItemPrice">Price</label>
          <input
            type="number"
            name="clientItemPrice"
            id="clientItemPrice"
            onChange={handleInputChange}
            value={inputs.clientItemPrice}
            required
          />
        </div>
        <div className="InvoiceForm-item">
          <label htmlFor="clientItemTotal">Total</label>
          <input
            type="number"
            name="clientItemTotal"
            id="clientItemTotal"
            value={inputs.clientItemTotal}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <button
        onClick={() => handleDrawer(false)}
        type="button"
        className="InvoiceForm-cancelButton"
      >
        Cancel
      </button>
      <button type="submit" className="InvoiceForm-submitButton">
        Submit
      </button>
    </form>
  );
}
