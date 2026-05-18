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
  const [typedText, setTypedText] = useState('');
  
  useEffect(() => {
    const textToType = "Welcome to Chinmay's Portfolio";
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setTypedText(textToType.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setLoading(false), 800); // pause a bit before sliding up
      }
    }, 70); // typing speed
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div 
            key="loader"
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} 
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: '#050505', 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-main)',
              fontFamily: 'var(--font-heading)'
            }}
          >
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
            }}>
              <span style={{ color: 'var(--text-main)' }}>{typedText}</span>
              {/* Blinking Cursor */}
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                style={{ 
                  display: 'inline-block', 
                  width: '4px', 
                  height: '2.5rem', 
                  background: 'var(--accent-primary)', 
                  marginLeft: '4px' 
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
          <p>&copy; {new Date().getFullYear()} @chinmaydutta. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
