import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLenis } from './hooks/useLenis';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import MouseGlow from './components/ui/MouseGlow';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Services from './components/sections/Services';
import TechStack from './components/sections/TechStack';
import GitHubSection from './components/sections/GitHubSection';
import Contact from './components/sections/Contact';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Education />
    <Experience />
    <Services />
    <TechStack />
    <GitHubSection />
    <CTA />
    <FAQ />
    <Contact />
  </>
);

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  useLenis();

  return (
    <>
      <Helmet>
        <title>Uzair Ali | Software Engineer Portfolio</title>
        <meta name="description" content="Uzair Ali - Software Engineer specializing in Full Stack Django Development, Machine Learning, and QA Automation." />
        <link rel="canonical" href="https://uzairali.dev" />
      </Helmet>

      <ScrollProgress />
      <MouseGlow />
      <Navbar />

      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
