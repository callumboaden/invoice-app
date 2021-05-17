import "../InvoiceListItem.css";

function InvoiceListItem({
  invoiceId,
  invoiceDate,
  clientName,
  itemTotal,
  invoiceStatus,
}) {
  const invoiceStatusStyle = {
    background: invoiceStatus === "draft" ? "#F3F3F5" : "",
    color: invoiceStatus === "draft" ? "#000" : "",
  };

  return (
    <li className="InvoiceList-listItem">
      <div className="Invoice-id">
        #<span>{invoiceId}</span>
      </div>
      <div className="Invoice-dueDate">{invoiceDate}</div>
      <div className="Invoice-name">{clientName}</div>
      <div className="Invoice-amount">{itemTotal}</div>
      <div className="InvoiceList-listItemRight">
        <div className="Invoice-status" data-status={invoiceStatus}>
          <span>{!invoiceStatus ? "pending" : invoiceStatus}</span>
        </div>
      </div>
    </li>
  );
}

export default InvoiceListItem;
