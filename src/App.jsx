import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import { BrowserRouter as Router } from "react-router-dom"; // Import the Router

function App() {
  return (
    <Router> {/* Wrap AllRoutes in Router */}
      <AllRoutes />
    </Router>
  );
}

export default App;
