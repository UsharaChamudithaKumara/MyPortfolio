import React, { useEffect, useRef } from 'react';
import {
  CodeIcon,
  MonitorIcon,
  PaletteIcon,
  BarChartIcon
} from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';
import './SkillsSection.css';

export function SkillsSection() {
  const skillSections = [
    {
      icon: <CodeIcon size={24} className="icon-blue glow-icon" />,
      title: 'Programming Languages',
      skills: [
        { name: 'C / C++', level: 85 },
        { name: 'Java', level: 90 },
        { name: 'C#', level: 80 },
        { name: 'PHP', level: 75 },
        { name: 'Kotlin', level: 85 },
        { name: 'JavaScript', level: 80 }
      ]
    },
    {
      icon: <MonitorIcon size={24} className="icon-blue glow-icon" />,
      title: 'Frontend Development',
      skills: [
        { name: 'HTML & CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React (MERN)', level: 80 },
        { name: 'JSP', level: 70 },
        { name: 'XML', level: 65 }
      ]
    },
    {
      icon: <PaletteIcon size={24} className="icon-blue glow-icon" />,
      title: 'Mobile & Design',
      skills: [
        { name: 'Android (Kotlin)', level: 85 },
        { name: 'C# (Windows Forms)', level: 75 },
        { name: 'Figma', level: 80 }
      ]
    },
    {
      icon: <BarChartIcon size={24} className="icon-blue glow-icon" />,
      title: 'Database & Tools',
      skills: [
        { name: 'MySQL / Workbench', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'SQL Server', level: 70 },
        { name: 'Git & GitHub', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <motion.div
        className="skills-container"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="skills-title">My Skills</h2>
          <motion.div
            className="skills-underline"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
              }
            }
          }}
        >
          {skillSections.map((section, idx) => (
            <SkillCard key={idx} section={section} index={idx} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function SkillCard({ section, index }: { section: any; index: number }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="skill-card"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.6, delay: index * 0.2 }
        }
      }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="skill-header"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, transition: { delay: index * 0.2 + 0.3 } }
        }}
      >
        <motion.div
          className="skill-icon-wrapper"
          initial={{ scale: 0 }}
          animate={controls}
          variants={{
            visible: {
              scale: 1,
              transition: {
                type: 'spring',
                stiffness: 200,
                delay: index * 0.2 + 0.2
              }
            }
          }}
        >
          {section.icon}
        </motion.div>
        <h3 className="skill-title">{section.title}</h3>
      </motion.div>

      <div className="skill-list">
        {section.skills.map((skill: any, skillIndex: number) => (
          <motion.div
            key={skillIndex}
            className="skill-item"
            initial={{ opacity: 0, x: -20 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  delay: index * 0.2 + skillIndex * 0.1 + 0.5
                }
              }
            }}
          >
            <motion.div className="skill-labels">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </motion.div>
            <div className="skill-bar-bg">
              <motion.div
                className="skill-bar-fg"
                initial={{ width: 0 }}
                animate={controls}
                variants={{
                  visible: {
                    width: `${skill.level}%`,
                    transition: {
                      duration: 1,
                      delay: index * 0.2 + skillIndex * 0.1 + 0.7,
                      ease: 'easeOut'
                    }
                  }
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
