import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./componets/pages/login";// Ensure this path is correct


function App() {
  return (
    <Router>
      <Login/>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
