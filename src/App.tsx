import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Modern percentage loader
    const duration = 2000;
    const interval = 20; // ms
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setCounter(progress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => setLoading(false), 400); // short delay after hitting 100%
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div 
            key="loader"
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Snappy modern cubic-bezier
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: '#050505', // Slightly darker than main bg for contrast
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-main)',
              fontFamily: 'var(--font-heading)'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: '6rem',
                fontWeight: 800,
                letterSpacing: '-2px',
                display: 'flex',
                alignItems: 'flex-end',
                gap: '0.5rem',
                lineHeight: 1
              }}
            >
              {counter} <span style={{ fontSize: '2.5rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>%</span>
            </motion.div>
            
            <motion.div 
              style={{
                width: '250px',
                height: '4px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '2px',
                overflow: 'hidden',
                marginTop: '2rem'
              }}
            >
              <motion.div 
                style={{
                  height: '100%',
                  background: 'var(--accent-gradient)',
                  width: `${counter}%`
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The main content sits underneath and is revealed when the loader slides up */}
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Hero />
          <About />
          <Resume />
          <Portfolio />
          <Contact />
        </main>
        <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
          <p>&copy; {new Date().getFullYear()} Chinmay Kumar Dutta. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
