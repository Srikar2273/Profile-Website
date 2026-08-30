import { Suspense, lazy } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LoadingSection from './components/LoadingSection';
import NavBar from './components/NavBar';
import useActiveSection from './hooks/useActiveSection';
import useCursorGlow from './hooks/useCursorGlow';
import { navItems } from './data/siteContent';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));

const sectionIds = navItems.map((item) => item.id);

const MotionMain = motion.create(Box);

const sectionFallback = (
  <>
    <LoadingSection />
    <LoadingSection />
  </>
);

function App() {
  const activeSection = useActiveSection(sectionIds);
  useCursorGlow();

  return (
    <div className="app-shell" id="top">
      <a className="skip-link" href="#about">
        Skip to content
      </a>

      <NavBar activeSection={activeSection} />

      <MotionMain
        component="main"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Hero />

        <Suspense fallback={sectionFallback}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </Suspense>
      </MotionMain>

      <Footer />
    </div>
  );
}

export default App;
