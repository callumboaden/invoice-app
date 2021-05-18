import Sidebar from "./components/Sidebar";
import InvoiceListContainer from "./components/InvoiceListContainer";
import InvoiceForm from "./components/InvoiceForm";
import Invoice from "./components/Invoice";
import data from "./data";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [invoices, setInvoices] = useState(data);
  const [formDrawerIsOpen, setFormDrawerisOpen] = useState(false);
  const [isEditing, setIsEditing] = useState({});
  const [currentInvoice, setCurrentInvoice] = useState({});

  const handleEditInvoice = (invoice) => {
    setFormDrawerisOpen(true);
    setIsEditing(true);
    setCurrentInvoice(invoice);
  };

  const addInvoice = (inputs) => {
    setInvoices((invoices) => [inputs, ...invoices]);
  };

  const editInvoice = (inputs) => {
    console.log("edit invoice");
    let updatedInvoiceList = invoices;
    let updatedInvoice = {};
    let index = 0;

    for (let i = 0; i < invoices.length; i++) {
      if (invoices[i].invoiceId === inputs.invoiceId) {
        updatedInvoice = inputs;
        index = i;
      }
    }

    updatedInvoiceList[index] = updatedInvoice;
    setInvoices(() => updatedInvoiceList);
  };

  const handleDrawerClose = () => {
    setFormDrawerisOpen(false);
    setIsEditing(false);
    setCurrentInvoice({});
  };

  return (
    <Router>
      <div
        className="App"
        style={{
          overflow: formDrawerIsOpen ? "hidden" : "",
          height: formDrawerIsOpen ? "100vh" : "",
        }}
      >
        <Sidebar />
        <InvoiceForm
          formDrawerIsOpen={formDrawerIsOpen}
          handleDrawer={setFormDrawerisOpen}
          invoices={invoices}
          addInvoice={addInvoice}
          isEditing={isEditing}
          currentInvoice={currentInvoice}
          handleDrawerClose={handleDrawerClose}
          editInvoice={editInvoice}
        />
        <Switch>
          <Route exact path="/">
            <InvoiceListContainer
              invoices={invoices}
              handleDrawer={setFormDrawerisOpen}
              formDrawerIsOpen={formDrawerIsOpen}
            />
          </Route>
          <Route
            path="/:id"
            children={
              <Invoice
                invoices={invoices}
                handleDrawer={setFormDrawerisOpen}
                handleEditing={setIsEditing}
                isEditing={isEditing}
                formDrawerIsOpen={formDrawerIsOpen}
                handleEditInvoice={handleEditInvoice}
              />
            }
          />
        </Switch>

        {formDrawerIsOpen ? (
          <div onClick={() => handleDrawerClose()} className="overlay"></div>
        ) : (
          ""
        )}
      </div>
    </Router>
  );
}

export default App;
