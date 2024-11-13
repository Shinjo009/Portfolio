import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-8">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-5xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Harsh Salunkhe
        </motion.h1>
        <motion.p
          className="text-2xl text-purple-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Electronic and Computer Science Engineer
        </motion.p>
      </div>
    </header>
  );
}

function About({ openModal }) {
  return (
    <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
      <motion.h2
        className="text-3xl font-bold mb-6 text-indigo-600"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center">
        <motion.img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me.jpg-CJRednI8kORCNoDTkKplJK72UTrAF6.jpeg"
          alt="Harsh Salunkhe"
          className="w-48 h-48 rounded-full mb-6 md:mb-0 md:mr-8 border-4 border-purple-400 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Motivated and detail-oriented engineering student with practical knowledge in system design and web development. Competent in C++, Python, React, Unreal Engine and other programming languages, with a decent foundation in PHP, JavaScript, and SQL.
        </motion.p>
      </div>
      <motion.button
        className="mt-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
        onClick={() => openModal(<FullAbout />)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Read More
      </motion.button>
    </section>
  );
}

function FullAbout() {
  return (
    <div className="text-gray-700">
      <h3 className="text-2xl font-bold mb-4 text-indigo-600">About Harsh Salunkhe</h3>
      <p className="mb-4 leading-relaxed">
        Motivated and detail-oriented engineering student with practical knowledge in system design and web development. Competent in C++, Python, React, Unreal Engine and other programming languages, decent foundation in PHP, JavaScript, and SQL.
      </p>
      <p className="leading-relaxed">
        Successfully led and participated in a variety of technical initiatives, including web applications, while mentoring colleagues and increasing team output. Adept in solving problems and flexible enough to use new technologies.
      </p>
    </div>
  );
}

function Education({ openModal }) {
  return (
    <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
      <motion.h2
        className="text-3xl font-bold mb-6 text-indigo-600"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>
      <motion.ul
        className="list-disc list-inside text-gray-700 space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <li>Fr. Conceicao Rodrigues College of Engineering, Bandra(W), Mumbai</li>
        <li>Mayur College</li>
        <li>Chavara High School</li>
      </motion.ul>
      <motion.button
        className="mt-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
        onClick={() => openModal(<FullEducation />)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Details
      </motion.button>
    </section>
  );
}

function FullEducation() {
  return (
    <div className="text-gray-700">
      <h3 className="text-2xl font-bold mb-4 text-indigo-600">Education Details</h3>
      <ul className="list-disc list-inside space-y-4">
        <li>
          Fr. Conceicao Rodrigues College of Engineering, Bandra(W), Mumbai
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>Bachelor of Engineering in Electronic and Computer Science</li>
            <li>November 2022 – Present</li>
            <li>Sem4(SGPA)- 8.91/10</li>
            <li>CGPA- 7.61</li>
          </ul>
        </li>
        <li>
          Mayur College
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>HSC- 77.00%</li>
            <li>2020-2022</li>
          </ul>
        </li>
        <li>
          Chavara High School
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>SSC- 91.4%</li>
            <li>2020</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

function Experience({ openModal }) {
  return (
    <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
      <motion.h2
        className="text-3xl font-bold mb-6 text-indigo-600"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Industrial Experience
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-700"
      >
        <h3 className="text-xl font-semibold mb-2">Ardent Software Mumbai, Maharashtra</h3>
        <p>Industrial Training and Internship on Data Science, AI Machine Learning Using Python (Project Based)</p>
      </motion.div>
      <motion.button
        className="mt-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
        onClick={() => openModal(<FullExperience />)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Details
      </motion.button>
    </section>
  );
}

function FullExperience() {
  return (
    <div className="text-gray-700">
      <h3 className="text-2xl font-bold mb-4 text-indigo-600">Industrial Experience</h3>
      <h4 className="text-xl font-semibold mb-2">Ardent Software Mumbai, Maharashtra</h4>
      <p className="mb-2">Industrial Training and Internship on Data Science, AI Machine Learning Using Python (Project Based)</p>
      <p className="mb-4">June 2024 - July 2024</p>
      <ul className="list-disc list-inside">
        <li>Developed a software which will recognise emotion based on the Amazon Product Review.</li>
      </ul>
    </div>
  );
}

function Projects({ openModal }) {
  const projects = [
    {
      title: "Correport — Corruption Reporting Website",
      description: "A secure and user-friendly web platform for anonymous corruption reporting."
    },
    {
      title: "Canteen Website Development",
      description: "A user-friendly website for the College canteen with daily menus and ordering system."
    },
    {
      title: "Smart Wardrobe System",
      description: "A smart wardrobe management system using React and PHP."
    }
  ];

  return (
    <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
      <motion.h2
        className="text-3xl font-bold mb-6 text-indigo-600"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Key Projects
      </motion.h2>
      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.li
            key={index}
            className="bg-gradient-to-br from-purple-100 to-indigo-100 p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-2 text-indigo-600">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
          </motion.li>
        ))}
      </motion.ul>
      <motion.button
        className="mt-8 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
        onClick={() => openModal(<FullProjects />)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View All Projects
      </motion.button>
    </section>
  );
}

function FullProjects() {
  return (
    <div className="text-gray-700">
      <h3 className="text-2xl font-bold mb-4 text-indigo-600">Key Projects and Research</h3>
      <ul className="space-y-4">
        <li>
          <h4 className="text-xl font-semibold mb-2 text-purple-600">Correport — Corruption Reporting Website</h4>
          <p>A secure and user-friendly web platform that offered user anonymity built with PHP for server-side scripting, complemented by HTML and CSS for structuring and styling the interface, empowering citizens to report corruption incidents anonymously and efficiently.</p>
        </li>
        <li>
          <h4 className="text-xl font-semibold mb-2 text-purple-600">Canteen Website Development</h4>
          <p>As a key member, I contributed to the development of a user-friendly website for the College canteen. We utilized HTML and CSS to effectively display daily menus and special offers and integrates an interactive ordering system to streamline the meal selection process.</p>
        </li>
        <li>
          <h4 className="text-xl font-semibold mb-2 text-purple-600">Smart Wardrobe System</h4>
          <p>Designed a smart wardrobe management system using React (frontend) and PHP (backend), offering dynamic outfit suggestions and an intuitive interface for efficient clothing organization.</p>
        </li>
      </ul>
    </div>
  );
}

function Skills({ openModal }) {
  const skills = [
    "C++", "C", "Unreal Engine", "HTML", "CSS", "ReactJs", "SQL", "Python",
    "Java", "Javascript", "PHP", "System Verilog", "Verilog"
  ];

  return (
    <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
      <motion.h2
        className="text-3xl font-bold mb-6 text-indigo-600"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Technical Skills
      </motion.h2>
      <motion.ul
        className="flex flex-wrap gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-gradient-to-r from-purple-200 to-indigo-200 text-indigo-800 px-4 py-2 rounded-full font-medium"
            whileHover={{ scale: 1.1, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.2 }}
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
      <motion.button
        className="mt-8 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
        onClick={() => openModal(<FullSkills />)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View All Skills
      </motion.button>
    </section>
  );
}

function FullSkills() {
  return (
    <div className="text-gray-700">
      <h3 className="text-2xl font-bold mb-4 text-indigo-600">Technical Skills</h3>
      <div className="space-y-4">
        <p><strong className="text-purple-600">Experienced:</strong> C++, C, Unreal Engine, HTML, CSS, ReactJs, SQL, Python</p>
        <p><strong className="text-purple-600">Familiar:</strong> Java, Javascript, PHP, System Verilog, Verilog</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
      <motion.h2
        className="text-3xl font-bold mb-6 text-indigo-600"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h2>
      <motion.ul
        className="space-y-3 text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <li className="flex items-center">
          <svg className="w-6 h-6 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          Email: harshsalunkhe3132004@gmail.com
        </li>
        <li className="flex items-center">
          <svg className="w-6 h-6 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          Phone: +91-7385037692
        </li>
        <li className="flex items-center">
          <svg className="w-6 h-6 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          LinkedIn: <a href="https://linkedin.com/in/harsh-salunkhe-140335257" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">linkedin.com/in/harsh-salunkhe-140335257</a>
        </li>
        <li className="flex items-center">
          <svg className="w-6 h-6 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
          GitHub: <a href="https://github.com/Shinjo009" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">github.com/Shinjo009</a>
        </li>
      </motion.ul>
    </section>
  );
}

function Modal({ content, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-lg p-8 max-w-lg w-full"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        >
          {content}
          <button
            className="mt-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
            onClick={onClose}
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Portfolio() {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <About openModal={openModal} />
          <Education openModal={openModal} />
          <Experience openModal={openModal} />
          <Projects openModal={openModal} />
          <Skills openModal={openModal} />
          <Contact />
        </motion.div>
      </main>
      {modalContent && <Modal content={modalContent} onClose={closeModal} />}
    </div>
  );
}