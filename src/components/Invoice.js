import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import invoices from "../data";
import "./Invoice.css";

export default function Invoice() {
  let { id } = useParams();
  const [state, setState] = useState({});

  const getInvoice = () => {
    return invoices.filter((invoice) => invoice.invoiceId === id);
  };

  useEffect(() => {
    const [invoice] = getInvoice();
    setState(invoice)
  })

    const { invoiceId, billerStreetAddress, billerCity, billerPostCode, billerCountry, clientName, clientEmail, clientStreetAddress, clientCity, clientPostCode, clientCountry,   invoiceDueDate, itemName, itemQuantity, itemPrice, itemTotal    } = state;

  return (
    <div className="Invoice-wrapper">
      <Link to="/">Go back</Link>
      <div className="Invoice-header">
        <div className="status">
          Status <span>Pending</span>
        </div>
        <div className="btn-group">
          <button className="btn btn-edit">Edit</button>
          <button className="btn btn-delete">Delete</button>
          <button className="btn btn-markPaid">Mark as Paid</button>
        </div>
      </div>
      <div className="Invoice-main">
        <div className="Invoice-main--header">
          <div>
            <div className="id">
              #<span>{invoiceId}</span>
            </div>
            <h3 className="description">Graphic Design</h3>
          </div>
          <div>
            <div className="biller-address">
              <span>{billerStreetAddress} <br />
              {billerCity} <br />
              {billerPostCode} <br /> {billerCountry}</span>
            </div>
          </div>
        </div>
        <div className="body">
          <div class="col">
            <div>
              <h3>Invoice Date</h3>
              <div className="date">21 Aug 2021</div>
            </div>
            <div>
              <h3>Payment Due</h3>
              <div className="date">{invoiceDueDate}</div>
            </div>
          </div>
          <div class="col">
            <div>
              <h3>Bill to</h3>
              <div className="client-address">
              <span className="client-name">{clientName}</span> <br />
              <span>{clientStreetAddress} <br />
              {clientCity} <br /> {clientPostCode} <br /> {clientCountry}</span>
            </div>
            </div>
          </div>
          <div class="col">
            <div>
              <h3>Sent to</h3>
              <div className="client-email">{clientEmail}</div>
            </div>
          </div>
        </div>
        <div className="itemList">
            <div className="header">
                <div className="itemName"><h3>Item Name</h3></div>
                <div className="itemQuantity"><h3>QTY</h3></div>
                <div className="itemPrice"><h3>Price</h3></div>
                <div className="itemTotal"><h3>Total</h3></div>
            </div>
            <div className="row">      
                <div className="itemName">{itemName}</div>
                <div className="itemQuantity">{itemQuantity}</div>
                <div className="itemPrice">{itemPrice}</div>
                <div className="itemTotal">{itemTotal}</div>
            </div>
        </div>
        <div className="Invoice-footer">
            <h3>Amount Due</h3> <div className="invoiceTotal">{itemTotal}</div>
        </div>
      </div>
    </div>
  );
}
