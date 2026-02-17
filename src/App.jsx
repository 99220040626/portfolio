import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import "./App.css";

export default function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">MSR</h2>

        <div className="nav-links">
          <Link to="about" smooth duration={600}>About</Link>
          <Link to="projects" smooth duration={600}>Projects</Link>
          <Link to="contact" smooth duration={600}>Contact</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Manyam Siva <span>Santhosh Kumar Reddy</span>
          </h1>

          <p className="hero-sub">
            Full-Stack Java Developer building scalable systems,
            elegant web applications, and intelligent AI solutions.
          </p>

          <div className="hero-buttons">
            <a href="/resume.pdf" download className="primary-btn">
              Download Resume
            </a>

            <a
              href="https://github.com/99220040626"
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/manyam-siva-santhosh-kumar-reddy-297a9531b/"
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <motion.section
        id="about"
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <h2>About</h2>
        <p>
          Computer Engineering undergraduate focused on backend architecture
          using Spring Boot and database systems using MySQL.
          <br /><br />
          Experienced in developing full-stack applications and
          AI-based predictive models with performance and scalability in mind.
        </p>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <h2>Projects</h2>

        <div className="project-grid">

          <div className="project-card">
            <h3>E-Commerce Platform</h3>
            <p>
              Full-stack web application built with React,
              Spring Boot and MySQL featuring secure authentication,
              REST APIs and optimized database design.
            </p>
          </div>

          <div className="project-card">
            <h3>Thyroid Disease Detection</h3>
            <p>
              Artificial Neural Network model built using TensorFlow
              achieving 92% accuracy with SMOTE balancing
              and dropout regularization.
            </p>
          </div>

        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="section contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <h2>Contact</h2>
        <p>Open to internships and entry-level software roles.</p>
        <p className="contact-mail">sivasanthoshmanyam48@gmail.com</p>
      </motion.section>

      <footer>
        © 2026 Manyam Siva Santhosh Kumar Reddy
      </footer>

    </div>
  );
}
