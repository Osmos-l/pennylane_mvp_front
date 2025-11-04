import Home from "./pages/Home";
import Sidebar from "@components/common/Sidebar/Sidebar";

function App() {
  return (
    <div className="bg-white min-vh-100 py-5 text-light">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;