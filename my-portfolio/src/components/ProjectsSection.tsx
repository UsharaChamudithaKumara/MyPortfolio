import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import './ProjectsSection.css';

const projects = [
  {
    id: 0,
    title: 'My Portfolio Website',
    description:
      'Responsive personal portfolio website built with React, Framer Motion, and Lucide icons, styled using plain CSS.',
    image:
      'https://imgur.com/5IzYXMn.png',
    tags: ['React', 'Framer Motion', 'Lucide Icons', 'CSS'],
    liveLink: 'https://your-portfolio-site-url.com',
    repoLink: 'https://github.com/UsharaChamudithaKumara',
  },
  {
    id: 1,
    title: 'Online Voting System for Award Nomination',
    description:
      'A PHP-MySQL powered system allowing secure award voting, with HTML, CSS, and JS for the frontend.',
    image:
      'https://imgur.com/HNhwTMh.jpeg',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    liveLink: '#',
    repoLink: 'https://github.com/UsharaChamudithaKumara/OnlineVotingSystemForAwardNomination/tree/main/Lotus-Award-Ceramony-HTML-main',
  },
  {
    id: 2,
    title: 'Employee Management System',
    description:
      'A C# application using Microsoft SQL Server for handling employee records, roles, and performance.',
    image:
      'https://imgur.com/XUe509e.jpg',
    tags: ['C#', 'SQL Server'],
    liveLink: '#',
    repoLink: 'https://github.com/UsharaChamudithaKumara/Employee-Management-Project',
  },
  {
    id: 3,
    title: 'Online Examination Management System',
    description:
      'Built using JSP, Java, and MySQL Workbench to manage online examinations with a secure backend.',
    image:
      'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1770&q=80',
    tags: ['JSP', 'Java', 'CSS', 'MySQL'],
    liveLink: '#',
    repoLink: 'https://github.com/UsharaChamudithaKumara/OnlineExaminationManagementSystem/tree/main/New%20folder',
  },
  {
    id: 4,
    title: 'Restaurant Management System',
    description:
      'A full MERN stack restaurant system with JavaScript backend and JSP frontend.',
    image:
      'https://imgur.com/5l8qi2O.jpg',
    tags: ['MERN Stack', 'JavaScript', 'JSP', 'TailwindCSS'],
    liveLink: '#',
    repoLink: 'https://github.com/UsharaChamudithaKumara',
  },
  {
    id: 5,
    title: 'Finance Tracker App',
    description:
      'An Android app built in Kotlin with SharedPreferences for local data and XML for UI.',
    image:
      'https://imgur.com/evQsIRv.jpg',
    tags: ['Kotlin', 'Android', 'XML', 'SharedPreferences'],
    liveLink: 'https://youtu.be/q82cup3Avvk?si=AtzM24cAsicqM1U3',
    repoLink: 'https://github.com/UsharaChamudithaKumara/ExpenseTrackerApp',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2 className="section-title">My Projects</h2>
          <motion.div
            className="section-underline"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <motion.p
            className="section-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            A collection of real-world applications I've developed during my academic and professional journey.
          </motion.p>
        </motion.div>

        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title + index}
              className="project-card"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="project-image-wrapper"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </motion.div>
              <div className="project-details">
                <motion.h3
                  className="project-title"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="project-description"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  className="project-tags"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                >
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={tag + i}
                      className="project-tag"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div
                  className="project-links"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.a
                    href={project.liveLink}
                    className="project-link live-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLinkIcon size={18} className="icon" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.repoLink}
                    className="project-link repo-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GithubIcon size={18} className="icon" />
                    Code
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
