import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Event from './pages/Event';
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import About from './pages/About';
import Faculty from './pages/Faculty';

// ScrollToTop component that handles scrolling
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <ScrollToTop /> {/* Add ScrollToTop component here */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Event />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;