import ButtonNewInvoice from "./ButtonNewInvoice";
import "../InvoiceListHeader.css";

function InvoiceListHeader({ invoices, handleDrawer }) {
  return (
    <header className="InvoiceList-header">
      <div className="InvoiceList-headerTitle">
        <h1>Invoices</h1>
        <p className="InvoiceList-total">
          There are {invoices.length} total invoices
        </p>
      </div>
      <div className="InvoiceList-headerOptions">
        <label htmlFor="filters">Filter by status</label>
        <select name="filters" id="filters">
          <option value="paid">Paid</option>
          <option value="pending">Pending</option>
          <option value="draft">Draft</option>
        </select>
        <ButtonNewInvoice handleDrawer={handleDrawer}></ButtonNewInvoice>
      </div>
    </header>
  );
}

export default InvoiceListHeader;
