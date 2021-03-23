import Sidebar from "./components/Sidebar";
import InvoiceListContainer from "./components/InvoiceListContainer";
import InvoiceForm from "./components/InvoiceForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />

      <InvoiceForm />
      <InvoiceListContainer />
    </div>
  );
}

export default App;
