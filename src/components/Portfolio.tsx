import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'SalesSavvy E-Commerce Web App',
      category: 'Full-Stack Development',
      image: 'https://via.placeholder.com/600x400/121212/8b5cf6?text=SalesSavvy',
      desc: 'Developed a full-stack e-commerce web application for small and medium businesses. Features responsive interfaces, product management, secure backend APIs, and payment integration.',
      tags: ['Spring Boot', 'React.js', 'MySQL', 'CSS', 'Spring Security'],
      demoUrl: '#',
      githubUrl: 'https://github.com/chinmay-dutta'
    },
    {
      title: 'InsiderJobs - MERN Stack Job Portal',
      category: 'Web Application',
      image: 'https://via.placeholder.com/600x400/121212/3b82f6?text=InsiderJobs',
      desc: 'A full-stack job portal platform connecting job seekers and recruiters with job posting, application management, and secure user authentication.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS'],
      demoUrl: '#',
      githubUrl: 'https://github.com/chinmay-dutta'
    },
    {
      title: 'Herito - Hotel Management System',
      category: 'Frontend Development',
      image: 'https://via.placeholder.com/600x400/121212/06b6d4?text=Herito',
      desc: 'Responsive hotel management website to streamline room booking, customer management, and hotel service information to enhance customer experience.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: '#',
      githubUrl: 'https://github.com/chinmay-dutta'
    },
    {
      title: 'Project Template',
      category: 'Add Category Here',
      image: 'https://via.placeholder.com/600x400/121212/8b5cf6?text=Template',
      desc: 'This is a template project placeholder. You can easily duplicate this object in Portfolio.tsx to add more of your amazing work!',
      tags: ['Technology', 'Tool'],
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="portfolio" className="section portfolio">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <motion.div 
            className="portfolio-item glass-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="portfolio-img-wrapper">
              <img src={project.image} alt={project.title} className="portfolio-img" />
              <div className="portfolio-overlay">
                <div className="portfolio-links">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="portfolio-link"><FiGithub /></a>
                  <a href={project.demoUrl} className="portfolio-link"><FiExternalLink /></a>
                </div>
              </div>
            </div>
            
            <div className="portfolio-content">
              <span className="portfolio-category">{project.category}</span>
              <h3 className="portfolio-title">{project.title}</h3>
              <p className="portfolio-desc">{project.desc}</p>
              <div className="portfolio-tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
