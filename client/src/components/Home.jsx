// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      
      {/* Page content */}
      <main className="min-h-screen p-6">
        <h1 className="text-3xl font-bold">Welcome to My Website</h1>
        <p className="mt-2 text-gray-600">
          This is the homepage content.
        </p>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
