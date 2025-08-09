import React, {useState, useEffect} from "react";
import {
  Main,
  About,
  Expertise,
  Skills,
  Experience,
  Education,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import SectionSeparator from './components/SectionSeparator';
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <SectionSeparator/>
            <About/>
            <SectionSeparator/>
            <Expertise/>
            <SectionSeparator/>
            <Skills/>
            <SectionSeparator/>
            <Experience/>
            <SectionSeparator/>
            <Education/>
            <SectionSeparator/>
            <Project/>
            <SectionSeparator/>
            <Contact/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;