import { motion } from 'framer-motion';
import { FiBriefcase, FiBookOpen } from 'react-icons/fi';
import './Resume.css';

const Resume = () => {
  const experience = [
    {
      role: 'Full Stack Development Training',
      company: 'KodNest, Bengaluru',
      year: 'Recent',
      desc: 'Completed an intensive full-stack development training program focusing on modern Java technologies and web development.'
    },
    {
      role: '5-Day AI Agents Intensive Course',
      company: 'Google',
      year: 'Recent',
      desc: 'Participated in a specialized intensive course on AI Agents organized by Google.'
    },
    {
      role: 'SQL (Basic) Certification',
      company: 'HackerRank',
      year: 'Certified',
      desc: 'Demonstrated fundamental knowledge of SQL queries, schema design, and database relationships.'
    }
  ];

  const education = [
    {
      role: 'B.Tech in Computer Science and Engineering',
      company: 'Nalanda Institute of Technology, Bhubaneswar',
      year: '2021 - 2025',
      desc: 'CGPA: 8.05'
    },
    {
      role: 'Intermediate (CHSE)',
      company: 'Aspire Higher Secondary School, Bhubaneswar',
      year: '2019 - 2021',
      desc: 'Score: 74.5%'
    },
    {
      role: 'Matriculation (BSE)',
      company: 'R K Nodal High School, Balasore',
      year: '2019',
      desc: 'Score: 73.5%'
    }
  ];

  const Timeline = ({ items, icon }: { items: any[], icon: React.ReactNode }) => (
    <div className="timeline">
      {items.map((item, index) => (
        <motion.div 
          className="timeline-item glass-card"
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="timeline-icon">{icon}</div>
          <div className="timeline-content">
            <span className="timeline-year text-gradient">{item.year}</span>
            <h4 className="timeline-role">{item.role}</h4>
            <span className="timeline-company">{item.company}</span>
            <p className="timeline-desc">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section id="resume" className="section resume">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My Resume
      </motion.h2>

      <div className="resume-container">
        <div className="resume-column">
          <h3 className="column-title">Training & Certifications</h3>
          <Timeline items={experience} icon={<FiBriefcase />} />
        </div>
        
        <div className="resume-column">
          <h3 className="column-title">Education</h3>
          <Timeline items={education} icon={<FiBookOpen />} />
        </div>
      </div>
    </section>
  );
};

export default Resume;
