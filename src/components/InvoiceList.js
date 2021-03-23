import "../InvoiceList.css";
import InvoiceListItem from "./InvoiceListItem";
import data from "../data";

function InvoiceList() {
  return (
    <ul className="InvoiceList">
      {data.map(({ invoiceDate, clientName, itemTotal }, index) => (
        <InvoiceListItem
          invoiceDate={invoiceDate}
          clientName={clientName}
          itemTotal={itemTotal}
        ></InvoiceListItem>
      ))}
    </ul>
  );
}

export default InvoiceList;
