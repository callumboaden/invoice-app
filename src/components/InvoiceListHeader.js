import ButtonNewInvoice from "./ButtonNewInvoice";
import "../InvoiceListHeader.css";

function InvoiceListHeader() {
  return (
    <header className="InvoiceList-header">
      <div class="InvoiceList-headerTitle">
        <h1>Invoices</h1>
        <p className="InvoiceList-total">There are 7 total invoices</p>
      </div>
      <div class="InvoiceList-headerOptions">
        <label for="filters">Filter by status</label>
        <select name="filters" id="filters">
          <option value="paid">Paid</option>
          <option value="pending">Pending</option>
          <option value="draft">Draft</option>
        </select>
        <ButtonNewInvoice></ButtonNewInvoice>
      </div>
    </header>
  );
}

export default InvoiceListHeader;
