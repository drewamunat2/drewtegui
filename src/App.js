import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./routes/Home";
import Links from "./routes/Links";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4">
          <Link to="/" className="text-white">
            <h1 className="text-2xl font-semibold">Biography</h1>
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/links" className="text-white">
                  links
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="p-4">
        <Routes>
            <Route path="/links" element={<Links />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
