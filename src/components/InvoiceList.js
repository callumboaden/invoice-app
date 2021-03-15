import "../InvoiceList.css";

function InvoiceList() {
  return (
    <ul className="InvoiceList">
      <li className="InvoiceList-listItem">
        <div className="Invoice-id">
          #<span>RT3080</span>
        </div>
        <div className="Invoice-dueDate">Due 19 Aug 2021</div>
        <div className="Invoice-name">John Morrison</div>
        <div className="Invoice-amount">$2,000.20</div>
        <div className="InvoiceList-listItemRight">
          <div className="Invoice-status">
            <span>Paid</span>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default InvoiceList;
