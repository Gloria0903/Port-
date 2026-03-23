/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, Component, ErrorInfo, ReactNode, Suspense, lazy } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Menu,
  X,
  Zap,
  Instagram,
  Twitter,
  Codepen,
  Loader2
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { DATA } from './data';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Lazy load sections for performance
const About = lazy(() => Promise.resolve({ default: () => (
  <section id="about" className="py-24 max-w-4xl mx-auto">
    <h2 className="section-heading numbered-heading">About Me</h2>
    <div className="grid md:grid-cols-[3fr_2fr] gap-12">
      <div className="space-y-4">
        {DATA.about.map((p, i) => <p key={i}>{p}</p>)}
        <ul className="grid grid-cols-2 gap-2 list-none p-0 m-0">
          {DATA.skills.map((skill) => (
            <li key={skill} className="font-mono text-xs flex items-center gap-2 before:content-['▹'] before:text-[#64ffda]">
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative group max-w-[300px] mx-auto md:mx-0 animate-float"
      >
        <div className="absolute inset-0 border-2 border-[#64ffda] rounded-md translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
        <div className="relative rounded-md overflow-hidden bg-[#64ffda]">
          <img 
            src="/images/prof.jpeg" 
            alt="Gloria" 
            className="w-full grayscale mix-blend-multiply hover:grayscale-0 hover:mix-blend-normal transition-all duration-500"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  </section>
) }));

const Experience = lazy(() => Promise.resolve({ default: () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section id="experience" className="py-24 max-w-3xl mx-auto">
      <h2 className="section-heading numbered-heading">Where I've Worked</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible">
          {DATA.experience.map((exp, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={cn("experience-tab", activeTab === i && "active")}
            >
              {exp.company}
            </button>
          ))}
        </div>
        <div className="flex-grow min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-xl font-medium text-[#ccd6f6] mb-1">
                {DATA.experience[activeTab].role} <span className="text-[#64ffda]">@ {DATA.experience[activeTab].company}</span>
              </h3>
              <p className="font-mono text-xs mb-6">{DATA.experience[activeTab].period}</p>
              <ul className="space-y-4 list-none p-0 m-0">
                {DATA.experience[activeTab].description.map((item, i) => (
                  <li key={i} className="text-lg flex gap-4 before:content-['▹'] before:text-[#64ffda] before:flex-shrink-0">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
} }));

const Work = lazy(() => Promise.resolve({ default: () => (
  <section id="work" className="py-24">
    <h2 className="section-heading numbered-heading">Some Things I've Built</h2>
    <div className="space-y-24">
      {DATA.projects.map((project, i) => (
        <motion.div 
          key={i} 
          className="project-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="project-content">
            <p className="project-overline">{project.overline}</p>
            <h3 className="project-title">{project.title}</h3>
            <div className="project-description">
              <p>{project.description}</p>
            </div>
            <ul className="project-tech-list">
              {project.tech.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <div className="flex gap-4 mt-4">
              <a href={project.github} className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"><Github size={20} /></a>
              <a href={project.external} className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"><ExternalLink size={20} /></a>
            </div>
          </div>
          <div className="project-image">
            <img src={project.image} alt={project.title} referrerPolicy="no-referrer" loading="lazy" />
          </div>
        </motion.div>
      ))}
    </div>
  </section>
) }));

// Error Boundary
class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(_: Error) { return { hasError: true }; }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) { console.error("Uncaught error:", error, errorInfo); }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0a192f] flex items-center justify-center p-6 text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-mono text-[#64ffda] mb-4">Something went wrong</h1>
            <button onClick={() => window.location.reload()} className="button-outline">Refresh Page</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-[#0a192f] z-[100] flex items-center justify-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-4"
    >
      <Loader2 className="w-12 h-12 text-[#64ffda] animate-spin" />
      <span className="font-mono text-[#64ffda] text-sm tracking-widest uppercase">Initializing System...</span>
    </motion.div>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  // Mouse tracking for spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Simulate dynamic data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY.current ? "down" : "up";
    if (latest > 100 && direction === "down" && !isMenuOpen) {
      setNavVisible(false);
    } else {
      setNavVisible(true);
    }
    setScrolled(latest > 50);
    lastScrollY.current = latest;
  });

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' }
  ];

  if (isLoading) return <LoadingScreen />;

  return (
    <ErrorBoundary>
      <div className="bg-[#0a192f] min-h-screen selection:bg-[#233554] selection:text-[#64ffda] relative">
        
        {/* Dynamic Background Elements */}
        <div 
          className="pointer-events-none fixed inset-0 z-30 transition duration-300 spotlight"
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any}
        />
        <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />
        
        {/* Header */}
        <header className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 flex items-center justify-between",
          scrolled ? "h-20 bg-[#0a192f]/85 backdrop-blur-md shadow-xl" : "h-24 bg-transparent",
          !navVisible && "-translate-y-full"
        )}>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#64ffda] font-mono text-2xl font-bold"
          >
            G
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            <ol className="flex items-center gap-8 list-none m-0 p-0">
              {navItems.map((item, i) => (
                <motion.li 
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a href={`#${item.id}`} className="nav-link">
                    <span>0{i + 1}.</span> {item.label}
                  </a>
                </motion.li>
              ))}
            </ol>
            <motion.a 
              href="/resume.pdf"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="button-outline py-3 px-4 text-xs"
            >
              Resume
            </motion.a>
          </nav>

          <button 
            className="md:hidden text-[#64ffda] z-[60]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </header>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 z-50 md:hidden flex justify-end"
            >
              <div className="w-[min(75vw,400px)] h-full bg-[#112240] shadow-2xl flex flex-col items-center justify-center p-10">
                <ol className="list-none p-0 m-0 w-full text-center space-y-8 mb-12">
                  {navItems.map((item, i) => (
                    <li key={item.id}>
                      <a 
                        href={`#${item.id}`} 
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-lg font-mono text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                      >
                        <span className="block text-[#64ffda] text-sm mb-2">0{i + 1}.</span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
                <a href="/resume.pdf" className="button-outline px-12 py-4">Resume</a>
              </div>
              <div className="absolute inset-0 bg-[#0a192f]/50 backdrop-blur-sm -z-10" onClick={() => setIsMenuOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Left Sidebar - Socials */}
        <div className="fixed bottom-0 left-10 z-10 hidden lg:block">
          <ul className="flex flex-col items-center gap-6 list-none p-0 m-0 after:content-[''] after:block after:w-px after:h-24 after:bg-[#a8b2d1]">
            {DATA.socials.map((social, i) => (
              <li key={i}>
                <a 
                  href={social.href} 
                  className="text-[#a8b2d1] hover:text-[#64ffda] hover:-translate-y-1 transition-all inline-block"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Sidebar - Email */}
        <div className="fixed bottom-0 right-10 z-10 hidden lg:block">
          <div className="flex flex-col items-center gap-6 after:content-[''] after:block after:w-px after:h-24 after:bg-[#a8b2d1]">
            <a 
              href={`mailto:${DATA.email}`}
              className="font-mono text-xs tracking-widest text-[#a8b2d1] hover:text-[#64ffda] hover:-translate-y-1 transition-all [writing-mode:vertical-rl]"
            >
              {DATA.email}
            </a>
          </div>
        </div>

        <main className="px-6 md:px-24 lg:px-40 max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <section id="hero" className="min-h-screen flex flex-col justify-center items-start pt-24">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-[#64ffda] mb-8"
            >
              Hi, my name is
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="big-heading mb-4"
            >
              {DATA.name}.
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="medium-heading mb-8"
            >
              {DATA.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="max-w-lg text-lg leading-relaxed mb-12"
            >
              {DATA.bio}
              <a href="#" className="teal-link">{DATA.company}</a>.
            </motion.p>
            <motion.a 
              href="#work"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="button-outline"
            >
              Check out my work!
            </motion.a>
          </section>

          <Suspense fallback={<div className="h-96 flex items-center justify-center"><Loader2 className="animate-spin text-[#64ffda]" /></div>}>
            <About />
          </Suspense>

          <Suspense fallback={<div className="h-96 flex items-center justify-center"><Loader2 className="animate-spin text-[#64ffda]" /></div>}>
            <Experience />
          </Suspense>

          <Suspense fallback={<div className="h-96 flex items-center justify-center"><Loader2 className="animate-spin text-[#64ffda]" /></div>}>
            <Work />
          </Suspense>

          {/* Contact Section */}
          <section id="contact" className="py-24 max-w-2xl mx-auto text-center">
            <p className="font-mono text-[#64ffda] mb-4">04. What's Next?</p>
            <h2 className="text-5xl font-bold text-[#ccd6f6] mb-6">Get In Touch</h2>
            <p className="text-lg leading-relaxed mb-12">
              Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href={`mailto:${DATA.email}`} className="button-outline inline-block">Say Hello</a>
          </section>

          {/* Footer */}
          <footer className="py-8 text-center">
            <div className="flex justify-center gap-6 mb-4 lg:hidden">
              {DATA.socials.map((social, i) => (
                <a key={i} href={social.href} className="text-[#a8b2d1] hover:text-[#64ffda] transition-colors" aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
            <a 
              href="https://github.com/bchiang7/v4" 
              className="font-mono text-xs text-[#a8b2d1] hover:text-[#64ffda] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Designed & Built by Brittany Chiang<br />
              Adapted by Gloria Njeru
            </a>
          </footer>

        </main>
      </div>
    </ErrorBoundary>
  );
}
