import { ArrowUpRight, Code2, Github, Linkedin, Mail } from 'lucide-react';
import Button from './components/Button.jsx';
import Card from './components/Card.jsx';
import SectionHeading from './components/SectionHeading.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import Stat from './components/Stat.jsx';
import { PROJECTS } from './data/projects.js';
import './styles/portfolio.css';

const SKILLS = ['React', 'JavaScript', 'CSS', 'Design Systems', 'Accessibility', 'Vite'];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Alex Morgan home">AM<span>.</span></a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <Button href="#contact" size="sm">Let’s talk</Button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Frontend developer · Costa Rica</p>
        <h1>I build digital products that feel <em>clear</em>, fast and intentional.</h1>
        <p className="hero-description">
          I turn product ideas into reusable interfaces with a strong focus on
          accessibility, design systems and thoughtful interaction.
        </p>
        <div className="hero-actions">
          <Button href="#work">View selected work <ArrowUpRight size={17} /></Button>
          <Button href="mailto:hello@example.com" variant="ghost">Email me</Button>
        </div>
      </div>

      <Card className="availability-card">
        <div className="status-row"><span className="status-dot" /> Available for selected projects</div>
        <div className="profile-mark">AM</div>
        <p>Building frontend systems that stay maintainable after launch.</p>
        <div className="mini-stack">
          <Code2 size={18} />
          <span>React · CSS · JavaScript</span>
        </div>
      </Card>
    </section>
  );
}

function Work() {
  return (
    <section className="section" id="work">
      <SectionHeading eyebrow="Selected work" title="Projects built to solve real problems." />
      <div className="project-grid">
        {PROJECTS.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div>
        <SectionHeading eyebrow="About" title="Less noise. Better systems." />
        <p className="about-copy">
          I care about what happens after the first implementation: can the next
          developer understand it, reuse it and extend it without fighting the codebase?
        </p>
        <div className="skill-list">
          {SKILLS.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </div>
      <div className="stats-grid">
        <Stat value="4+" label="Years building interfaces" />
        <Stat value="18" label="Projects shipped" />
        <Stat value="92" label="Average Lighthouse score" suffix="+" />
        <Stat value="100%" label="Reusable-component mindset" />
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <p className="eyebrow">Have a project in mind?</p>
      <h2>Let’s build something people enjoy using.</h2>
      <Button href="mailto:hello@example.com">Start a conversation <ArrowUpRight size={17} /></Button>
      <div className="socials" aria-label="Social links">
        <a href="#" aria-label="GitHub"><Github /></a>
        <a href="#" aria-label="LinkedIn"><Linkedin /></a>
        <a href="mailto:hello@example.com" aria-label="Email"><Mail /></a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <footer>© 2026 Alex Morgan. Designed and built with care.</footer>
    </div>
  );
}
