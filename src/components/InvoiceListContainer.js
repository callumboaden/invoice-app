import InvoiceList from "./InvoiceList";
import InvoiceListHeader from "./InvoiceListHeader";
import "../InvoiceListContainer.css";

function InvoiceListContainer() {
  return (
    <div className="InvoiceList-container">
      <InvoiceListHeader></InvoiceListHeader>
      <InvoiceList></InvoiceList>
    </div>
  );
}

export default InvoiceListContainer;
