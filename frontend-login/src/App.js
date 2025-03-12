import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./componets/pages/login";// Ensure this path is correct
import RegisterForm from "./componets/pages/Register";

function App() {
  return (
    <Router>
      <Login/>
      <div className="App">
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
