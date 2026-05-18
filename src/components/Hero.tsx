import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="section hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="greeting">Hello, I'm</span>
          <h1 className="name">Chinmay Kumar Dutta</h1>
          <h2 className="role">
            I am a <span className="text-gradient">Java Full-Stack Developer.</span>
          </h2>
          <p className="bio">
            Motivated and detail-oriented Computer Science Engineering student with hands-on experience in Java Full-Stack Development. 
            Skilled in Core Java, Spring Framework, React.js, and web development.
          </p>
          
          <div className="hero-actions">
            <a href="#portfolio" className="btn btn-primary">
              View My Work <FiArrowRight />
            </a>
            <div className="social-links">
              <a href="https://github.com/chinmay-dutta" target="_blank" rel="noreferrer" className="social-icon" aria-label="Github"><FiGithub /></a>
              <a href="https://www.linkedin.com/in/chinmay-kumar-dutta-73a22329b/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href="mailto:chinmaykumardutta08@gmail.com" className="social-icon" aria-label="Email"><FiMail /></a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-blob">
            <img src="/profile.png" alt="Chinmay Kumar Dutta" className="hero-image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
