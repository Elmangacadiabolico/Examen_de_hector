import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css'
import Home from "./components/Home"; 
import Juego from "./components/Game"; 

function App() {
  return (
    <Router> 
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>Mi App</h1>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>

      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/juego" element={<Juego />} />
      </Routes>
    </Router>
  );
}

export default App;
