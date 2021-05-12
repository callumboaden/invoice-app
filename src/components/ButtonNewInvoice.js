import "../ButtonNewInvoice.css";

function ButtonNewInvoice({ handleDrawer }) {
  return (
    <button
      onClick={() => handleDrawer(true)}
      className="btn Button-newInvoice"
    >
      <span>+</span> New Invoice
    </button>
  );
}

export default ButtonNewInvoice;
