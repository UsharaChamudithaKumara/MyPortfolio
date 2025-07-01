import React, { useRef } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './ContactSection.css';

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const contactInfo = [
    {
      icon: <MailIcon size={24} className="icon-blue" />,
      title: 'Email',
      content: 'usharakumara20030820@gmail.com',
    },
    {
      icon: <PhoneIcon size={24} className="icon-blue" />,
      title: 'Phone',
      content: '+94 754259896',
    },
    {
      icon: <MapPinIcon size={24} className="icon-blue" />,
      title: 'Location',
      content: '5/80, Mayfield, 4th Lane, Kalagedihena',
    },
  ];

  const formFields = [
    { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name', colSpan: true },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'Your email', colSpan: true },
    { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Subject', colSpan: false },
    { id: 'message', label: 'Message', type: 'textarea', placeholder: 'Your message', colSpan: false, rows: 5 },
  ];

  const sendEmail = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formRef.current) return;

  // Get form data from the formRef
  const formData = new FormData(formRef.current);
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    subject: formData.get('subject') as string,
    message: formData.get('message') as string,
  };

  try {
    // Send email via emailjs (existing)
    await emailjs.sendForm('service_78nn2h8', 'template_qtjxyc9', formRef.current, '178q8z094B6b6FxNd');

    // Save to MongoDB backend
    const res = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error('Failed to save contact');

    alert('Message sent and saved successfully!');
    formRef.current.reset();
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to send or save message.');
  }
};


  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2 className="contact-title">Get In Touch</h2>
          <motion.div
            className="underline"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          ></motion.div>
          <motion.p
            className="contact-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Have a project in mind or want to discuss an opportunity? Feel free to reach out.
          </motion.p>
        </motion.div>

        <div className="contact-grid">
          <div className="contact-info-column">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="contact-info-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="contact-info-flex">
                  <motion.div
                    className="contact-icon-bg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, delay: index * 0.2 + 0.2 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="contact-info-text">
                    <h3 className="contact-info-title">{item.title}</h3>
                    <p className="contact-info-content">{item.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="contact-form-column"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeInUp}
          >
            <div className="contact-form-wrapper">
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="form-grid-colspan">
                  {formFields
                    .filter((field) => field.colSpan)
                    .map((field, index) => (
                      <motion.div
                        key={field.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                        className="form-field"
                      >
                        <label htmlFor={field.id} className="form-label">{field.label}</label>
                        <motion.input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          className="form-input"
                          placeholder={field.placeholder}
                          whileFocus={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                          required
                        />
                      </motion.div>
                    ))}
                </div>

                {formFields
                  .filter((field) => !field.colSpan)
                  .map((field, index) => (
                    <motion.div
                      key={field.id}
                      className="form-field"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                    >
                      <label htmlFor={field.id} className="form-label">{field.label}</label>
                      {field.type === 'textarea' ? (
                        <motion.textarea
                          id={field.id}
                          name={field.id}
                          rows={field.rows}
                          className="form-textarea"
                          placeholder={field.placeholder}
                          whileFocus={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                          required
                        ></motion.textarea>
                      ) : (
                        <motion.input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          className="form-input"
                          placeholder={field.placeholder}
                          whileFocus={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                          required
                        />
                      )}
                    </motion.div>
                  ))}

                <motion.div
                  className="form-submit-wrapper"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                >
                  <motion.button
                    type="submit"
                    className="btn-submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Message
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="send-icon"
                    >
                      <SendIcon size={18} />
                    </motion.span>
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
