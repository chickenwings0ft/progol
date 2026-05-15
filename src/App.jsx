import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TrainingBenefits from './components/TrainingBenefits';
import Models from './components/Models';
import Gallery from './components/Gallery';
import SocialProof from './components/SocialProof';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ width: '100%', minWidth: 0 }}>
      <Navbar />
      <main style={{ width: '100%' }}>
        <Hero />
        <Features />
        <TrainingBenefits />
        <Models />
        <Gallery />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
