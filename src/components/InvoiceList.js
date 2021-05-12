import "../InvoiceList.css";
import InvoiceListItem from "./InvoiceListItem";
import { Link } from "react-router-dom";

function InvoiceList({ invoices }) {
  return (
    <ul className="InvoiceList">
      {invoices.map(
        ({ invoiceId, invoiceDate, clientName, itemTotal }, index) => (
          <Link to={`/${invoiceId}`}>
            <InvoiceListItem
              key={index}
              invoiceId={invoiceId}
              invoiceDate={invoiceDate}
              clientName={clientName}
              itemTotal={itemTotal}
            ></InvoiceListItem>
          </Link>
        )
      )}
    </ul>
  );
}

export default InvoiceList;
