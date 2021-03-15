import Sidebar from "./components/Sidebar";
import InvoiceList from "./components/InvoiceList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <InvoiceList></InvoiceList>
    </div>
  );
}

export default App;
