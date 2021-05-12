import Sidebar from "./components/Sidebar";
import InvoiceListContainer from "./components/InvoiceListContainer";
import InvoiceForm from "./components/InvoiceForm";
import Invoice from "./components/Invoice";
import data from "./data";
import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [invoices, setInvoices] = useState(data);
  const [formDrawerIsOpen, setFormDrawerisOpen] = useState(false);

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
          setInvoices={setInvoices}
        />
        <Switch>
          <Route exact path="/">
            <InvoiceListContainer
              invoices={invoices}
              handleDrawer={setFormDrawerisOpen}
              formDrawerIsOpen={formDrawerIsOpen}
            />
          </Route>
          <Route path="/:id" children={<Invoice />} />
        </Switch>
       
        {formDrawerIsOpen ? (
          <div
            onClick={() => setFormDrawerisOpen(false)}
            className="overlay"
          ></div>
        ) : (
          ""
        )}
      </div>
    </Router>
  );
}

export default App;
