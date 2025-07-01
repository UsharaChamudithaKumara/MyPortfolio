import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import './Footer.css';

export function Footer() {
  const socialLinks = [
    { icon: <GithubIcon size={24} />, label: 'GitHub', href: 'https://github.com/UsharaChamudithaKumara' },
    { icon: <LinkedinIcon size={24} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ushara-kumara-b64b17349?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Be7GJEJ%2BYQ5q32FIZuFrtkQ%3D%3D' },
    { icon: <TwitterIcon size={24} />, label: 'Twitter', href: 'https://twitter.com/ushara_kumara' },
    { icon: <InstagramIcon size={24} />, label: 'Instagram', href: 'https://www.instagram.com/usharachamuditha/profilecard/?igsh=MWViMzNxOWNkNmlmNA==' },
  ];

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="footer-name">Ushara Chamuditha Kumara</p>
            <p className="footer-copy">© {new Date().getFullYear()} All rights reserved.</p>
          </motion.div>

          <motion.div
            className="footer-socials"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delayChildren: 0.3, staggerChildren: 0.1 },
              },
            }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="footer-social-link"
                aria-label={social.label}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.nav
            className="footer-nav"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.6 },
              },
            }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="footer-nav-link"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.nav>
        </motion.div>
      </div>
    </footer>
  );
}
