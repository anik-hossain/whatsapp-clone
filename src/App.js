import "./styles/app.css";
import Conversation from "./Components/Conversation";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Sidebar />
        <Conversation />
      </div>
    </div>
  );
}

export default App;
