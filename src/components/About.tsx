import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import './About.css';

const About = () => {
  const skills = [
    { name: 'Java / Spring Boot', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Node.js & Express', level: 80 },
    { name: 'HTML / CSS / JS', level: 95 },
    { name: 'MySQL / MongoDB', level: 85 },
    { name: 'Git / Docker', level: 75 },
  ];

  return (
    <section id="about" className="section about">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <div className="about-container">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Dedicated Software Engineer</h3>
          <p>
            I am a motivated Computer Science Engineering student with hands-on experience in Full-Stack Development. 
            I specialize in building scalable web applications using Core Java, Spring Framework, Hibernate, and modern frontend technologies like React.js.
          </p>
          <p>
            I have the ability to adapt quickly, work under pressure, and contribute effectively to organizational goals. I am well-versed in Agile methodologies and the Software Development Life Cycle (SDLC).
          </p>
          <a href="/Chinmay_Resume.pdf" download="Chinmay_Resume.pdf" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
            Download Resume <FiDownload />
          </a>
        </motion.div>

        <motion.div 
          className="about-skills"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>My Skills</h3>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
