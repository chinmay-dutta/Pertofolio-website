import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>

      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Let's talk about everything!</h3>
          <p>Don't like forms? Send me an email. 👋</p>
          
          <div className="info-items">
            <div className="info-item">
              <div className="info-icon"><FiMail /></div>
              <div>
                <h4>Email</h4>
                <span>chinmaykumardutta08@gmail.com</span>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><FiPhone /></div>
              <div>
                <h4>Phone</h4>
                <span>+91 9692480445</span>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><FiMapPin /></div>
              <div>
                <h4>Location</h4>
                <span>Odisha, India</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-wrapper glass-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required className="form-control" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required className="form-control" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required className="form-control" />
            </div>
            <div className="form-group">
              <textarea placeholder="Message" rows={5} required className="form-control"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Send Message <FiSend />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
