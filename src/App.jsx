import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
import "./App.css";

// Google Drive resume links
const RESUME_VIEW     = "https://drive.google.com/file/d/1q1BRggRE1mfRKJRMHe2dsvznhbLU1XmZ/view";
const RESUME_DOWNLOAD = "https://drive.google.com/uc?export=download&id=1q1BRggRE1mfRKJRMHe2dsvznhbLU1XmZ";

// ─── Animation variants ────────────────────────────────────────────────────
const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Data ──────────────────────────────────────────────────────────────────
const skills = [
  "Java", "Spring Boot", "React", "MySQL",
  "TensorFlow", "REST APIs", "Python", "Git",
];

const projects = [
  {
    num: "01",
    title: "E-Commerce Platform",
    tags: ["React", "Spring Boot", "MySQL"],
    desc: "Full-stack web application featuring secure JWT authentication, optimized REST APIs, and a normalized relational database design handling 10k+ concurrent users.",
    link: "#",
  },
  {
    num: "02",
    title: "Thyroid Disease Detection",
    tags: ["TensorFlow", "Python", "SMOTE"],
    desc: "Artificial Neural Network model achieving 92% diagnostic accuracy with SMOTE class-balancing, dropout regularization, and real-time inference pipeline.",
    link: "#",
  },
];

// ─── Component ─────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="app">

      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <span className="logo">MSR<span className="logo-dot">.</span></span>

        <div className="nav-links">
          {["about", "skills", "projects", "contact"].map((s) => (
            <Link key={s} to={s} smooth={true} duration={700} offset={-80}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </Link>
          ))}
        </div>

        <a href={RESUME_DOWNLOAD} target="_blank" rel="noreferrer" className="nav-resume-btn">
          Résumé <FaArrowRight size={11} />
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg-grid" />
        <div className="hero-orb orb-1" />
        <div className="hero-orb orb-2" />

        <div className="hero-inner">
          <motion.div
            className="hero-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-tag-dot" />
            Available for Internships &amp; Entry-Level Roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Manyam Siva<br />
            <span className="gradient-text">Santhosh Kumar</span><br />
            Reddy
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Full-Stack Java Developer crafting scalable backend systems,
            elegant web applications, and intelligent AI solutions.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <a href={RESUME_DOWNLOAD} target="_blank" rel="noreferrer" className="primary-btn">
              Download Résumé <FaArrowRight size={13} />
            </a>
            <div className="hero-socials">
              <a
                href="https://github.com/99220040626"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/manyam-siva-santhosh-kumar-reddy-297a9531b/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:sivasanthoshmanyam48@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span>Scroll</span>
          <div className="scroll-line" />
        </motion.div>
      </section>

      {/* ── ABOUT ── */}
      <motion.section
        id="about"
        className="section about-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="section-inner about-inner">
          <motion.div className="section-label" variants={fadeUp}>
            01 — About Me
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-text" variants={fadeUp}>
              <h2>
                Building systems that scale,<br />
                <em>solutions that matter.</em>
              </h2>
              <p>
                Computer Engineering undergraduate with a deep focus on backend
                architecture using <strong>Spring Boot</strong> and robust
                database design with <strong>MySQL</strong>. I bridge the gap
                between server-side engineering and intelligent AI systems.
              </p>
              <p>
                My work spans full-stack product development to machine learning
                pipelines — always optimized for performance, clarity, and
                maintainability.
              </p>
            </motion.div>

            <motion.div className="about-stats" variants={fadeUp}>
              {[
                { val: "92%", label: "ML Model Accuracy" },
                { val: "2+",  label: "Full-Stack Projects" },
                { val: "8+",  label: "Technologies Mastered" },
              ].map(({ val, label }) => (
                <div className="stat-card" key={label}>
                  <span className="stat-val">{val}</span>
                  <span className="stat-label">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── SKILLS ── */}
      <motion.section
        id="skills"
        className="section skills-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="section-inner">
          <motion.div className="section-label" variants={fadeUp}>
            02 — Tech Stack
          </motion.div>
          <motion.h2 variants={fadeUp}>Core Technologies</motion.h2>

          <motion.div className="skills-wrap" variants={fadeUp}>
            {skills.map((s) => (
              <span className="skill-pill" key={s}>{s}</span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── PROJECTS ── */}
      <motion.section
        id="projects"
        className="section projects-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="section-inner">
          <motion.div className="section-label" variants={fadeUp}>
            03 — Work
          </motion.div>
          <motion.h2 variants={fadeUp}>Selected Projects</motion.h2>

          <motion.div className="project-list" variants={fadeUp}>
            {projects.map((p) => (
              <div className="project-item" key={p.num}>
                <div className="project-num">{p.num}</div>
                <div className="project-body">
                  <div className="project-top">
                    <h3>{p.title}</h3>
                    <div className="project-tags">
                      {p.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <p>{p.desc}</p>
                </div>
                <div className="project-arrow">
                  <FaArrowRight />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── CONTACT ── */}
      <motion.section
        id="contact"
        className="section contact-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="section-inner contact-inner">
          <motion.div className="section-label" variants={fadeUp}>
            04 — Contact
          </motion.div>

          <motion.h2 variants={fadeUp}>
            Let&apos;s Build<br />
            <span className="gradient-text">Something Great</span>
          </motion.h2>

          <motion.p className="contact-sub" variants={fadeUp}>
            Open to internships and entry-level software engineering roles.
            I&apos;d love to hear about your team and what you&apos;re building.
          </motion.p>

          <motion.a
            href="mailto:sivasanthoshmanyam48@gmail.com"
            className="contact-cta"
            variants={fadeUp}
          >
            sivasanthoshmanyam48@gmail.com
            <FaArrowRight size={14} />
          </motion.a>

          <motion.div className="contact-socials" variants={fadeUp}>
            <a
              href="https://github.com/99220040626"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/manyam-siva-santhosh-kumar-reddy-297a9531b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* ── FOOTER ── */}
      <footer>
        <span>© 2026 Manyam Siva Santhosh Kumar Reddy</span>
        <span className="footer-sep">—</span>
        <span>Designed &amp; Built with care</span>
      </footer>

    </div>
  );
}
