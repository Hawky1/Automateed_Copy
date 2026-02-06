import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Showcase } from './components/sections/Showcase';
import { Demo } from './components/sections/Demo';
import { Steps } from './components/sections/Steps';
import { Process } from './components/sections/Process';
import { Illustration } from './components/sections/Illustration';
import { CoverDesign } from './components/sections/CoverDesign';
import { CoverTemplates } from './components/sections/CoverTemplates';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Demo />
        <Steps />
        <Process />
        <Illustration />
        <CoverDesign />
        <CoverTemplates />
      </main>
      <Footer />
    </div>
  );
}

export default App;
