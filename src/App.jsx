import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Process from './components/Process/Process';
import FAQ from './components/FAQ/FAQ';
import FinalCTA from './components/FinalCTA/FinalCTA';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      {/* Shared goo filter for the .cta-blob CTA treatment (Nav + Hero both
          reference #goo, so it's rendered once here rather than per-button). */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="5" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
              result="goo"
            />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>
      {/* Fixed, static noise layer for a tactile "not flat" surface. Fixed +
          pointer-events:none so it never repaints on scroll (a texture like
          this baked into each section's own background would cost a GPU
          repaint every frame while scrolling). */}
      <div className="grain-overlay" aria-hidden="true" />
      <Nav />
      <Hero />
      <About />
      <Services />
      <Process />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default App;
