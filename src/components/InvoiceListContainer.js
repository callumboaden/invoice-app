import InvoiceList from "./InvoiceList";
import InvoiceListHeader from "./InvoiceListHeader";
import "../InvoiceListContainer.css";

function InvoiceListContainer({ invoices, handleDrawer, formDrawerIsOpen }) {
  return (
    <div className="InvoiceList-container">
      <InvoiceListHeader
        invoices={invoices}
        handleDrawer={handleDrawer}
      ></InvoiceListHeader>
      <InvoiceList invoices={invoices}></InvoiceList>
    </div>
  );
}

export default InvoiceListContainer;
