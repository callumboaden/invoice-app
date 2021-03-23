import "../InvoiceListItem.css";

function InvoiceListItem({ invoiceDate, clientName, itemTotal }) {
  return (
    <li className="InvoiceList-listItem">
      <div className="Invoice-id">
        #<span>RT3080</span>
      </div>
      <div className="Invoice-dueDate">{invoiceDate}</div>
      <div className="Invoice-name">{clientName}</div>
      <div className="Invoice-amount">{itemTotal}</div>
      <div className="InvoiceList-listItemRight">
        <div className="Invoice-status">
          <span>Paid</span>
        </div>
      </div>
    </li>
  );
}

export default InvoiceListItem;
