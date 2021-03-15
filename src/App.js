import Sidebar from "./components/Sidebar";
import InvoiceListContainer from "./components/InvoiceListContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <InvoiceListContainer></InvoiceListContainer>
    </div>
  );
}

export default App;
