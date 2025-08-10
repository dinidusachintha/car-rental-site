// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        
        {/* Navbar always at the top */}
        <Navbar />

        {/* Main content grows to fill space between navbar & footer */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        {/* Footer always at the bottom */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
