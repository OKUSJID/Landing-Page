import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/Components/Header'; // Import your Header component
import Footer from '../src/Components/Footer'; // Import your Footer component
import Blog from '../src/Components/Blog'; // Import your page components
import Pricing from '../src/Components/Pricing'; // Another page component
// Import other pages as needed

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Blog />} />
                <Route path="/pricing" element={<Pricing />} />
                {/* Define other routes as needed */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
