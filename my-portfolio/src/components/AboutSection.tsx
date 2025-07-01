import React from 'react';
import { UserIcon, BriefcaseIcon, GraduationCapIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import './AboutSection.css';

export function AboutSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const content = [
    {
      icon: <UserIcon size={28} />,
      title: 'Who I Am',
      content:
        `I am Ushara Chamuditha, an undergraduate student pursuing BSc (Hons) Software Engineering at SLIIT University. 
        I am a dedicated individual with strong work ethics, quick learning abilities, and a positive attitude. 
        I am eager to develop my skills and contribute value in a fast-paced work environment. 
        I am a reliable team player with effective communication and a strong willingness to learn.`
    },
    {
      icon: <BriefcaseIcon size={28} />,
      title: 'Projects & Experience',
      content: [
        {
          company: 'Finance Tracker Application',
          position: 'Mobile App Development',
          description: 'Developed an Android app using Kotlin and XML. Implemented data storage with Shared Preferences.'
        },
        {
          company: 'Restaurant Management System',
          position: 'MERN Stack Project',
          description: 'Built a full-stack web app using MongoDB, Express, React, and Node.js with JSP, Tailwind CSS, and JS frontend.'
        },
        {
          company: 'Online Examination Management System',
          position: '',
          description: 'Developed backend systems using Java with frontend JSP, CSS, and JS, and database management using MySQL Workbench.'
        }
      ]
    },
    {
      icon: <GraduationCapIcon size={28} />,
      title: 'Education',
      content: [
        {
          school: 'SLIIT University',
          degree: 'BSc (Hons) Software Engineering • 2023 - 2027',
          description: 'Currently pursuing undergraduate degree focused on software development and engineering principles.'
        },
        {
          school: 'Esoft Metro College',
          degree: 'Diploma in Information Technology • 2023',
          description: 'Diploma in English • 2023'
        },
        {
          school: 'Sanghabodhi National College',
          degree: 'Advanced Level (Mathematics) • 2019 - 2022',
          description: 'Completed A/L focusing on Mathematics.'
        },
        {
          school: 'Sanghabodhi National College',
          degree: 'Ordinary Level • 2014 - 2019',
          description: ''
        }
      ]
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2 className="title">About Me</h2>
          <motion.div
            className="underline-blue"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <div className="grid-3-cols">
          {content.map((section, index) => (
            <motion.div
              key={index}
              className="card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="icon-wrapper"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: index * 0.2 + 0.3 }}
              >
                {section.icon}
              </motion.div>
              <motion.h3
                className="heading"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.5 }}
              >
                {section.title}
              </motion.h3>

              {typeof section.content === 'string' ? (
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.7 }}
                >
                  {section.content}
                </motion.p>
              ) : (
                <motion.ul
                  className="list"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.2
                      }
                    }
                  }}
                >
                  {section.content.map((item, i) => (
                    <motion.li
                      key={i}
                      className="list-item"
                      variants={fadeInUp}
                      transition={{ duration: 0.5 }}
                    >
                     { 'company' in item ? (
  <>
    <p className="font-medium">{item.company}</p>
    <p className="text-sm">{item.position}</p>
    <p className="text-gray-600 mt-1">{item.description}</p>
  </>
) : (
  <>
    <p className="font-medium">{item.school}</p>
    <p className="text-sm">{item.degree}</p>
    <p className="text-gray-600 mt-1">{item.description}</p>
  </>
)}

                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
