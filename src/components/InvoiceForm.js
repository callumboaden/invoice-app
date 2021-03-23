import React from "react";
import "./InvoiceForm.css";

export default function InvoiceForm() {
  return (
    <form className="InvoiceForm">
      <h2>New Invoice</h2>
      <h3>Bill From</h3>
      <div className="InvoiceForm-item">
        <label htmlFor="billerStreetAddress">Street Address</label>
        <input
          type="text"
          name="billerStreetAddress"
          id="billerStreetAddress"
        />
      </div>
      <div className="InvoiceForm-group">
        <div className="InvoiceForm-item">
          <label htmlFor="billerCity">City</label>
          <input type="text" name="billerCity" id="billerCity" />
        </div>
        <div className="InvoiceForm-item">
          <label htmlFor="billerPostcode">Postcode</label>
          <input type="text" name="billerPostcode" id="billerPostcode" />
        </div>
        <div className="InvoiceForm-item">
          <label htmlFor="billerCountry">Country</label>
          <input type="text" name="billerCountry" id="billerCountry" />
        </div>
      </div>

      <h3>Bill To</h3>

      <div className="InvoiceForm-item">
        <label htmlFor="clientName">Client's Name</label>
        <input type="text" name="clientName" id="clientName" />
      </div>
      <div className="InvoiceForm-item">
        <label htmlFor="clientEmail">Client's Email</label>
        <input type="text" name="clientEmail" id="clientEmail" />
      </div>
      <div className="InvoiceForm-item">
        <label htmlFor="clientStreetAddress">Street Address</label>
        <input
          type="text"
          name="clientStreetAddress"
          id="clientStreetAddress"
        />
      </div>
      <div className="InvoiceForm-group">
        <div className="InvoiceForm-item">
          <label htmlFor="clientCity">City</label>
          <input type="text" name="clientCity" id="clientCity" />
        </div>
        <div className="InvoiceForm-item">
          <label htmlFor="clientPostcode">Postcode</label>
          <input type="text" name="clientPostcode" id="clientPostcode" />
        </div>
        <div className="InvoiceForm-item">
          <label htmlFor="clientPostcode">Country</label>
          <input type="text" name="clientPostcode" id="clientPostcode" />
        </div>
      </div>
    </form>
  );
}
