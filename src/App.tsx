import React, {useState, useEffect} from "react";
import { Analytics } from "@vercel/analytics/react"
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
        // Simple scroll reset only on initial load
        const resetScroll = () => {
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            window.scrollTo(0, 0);
        };
        
        // Reset immediately
        resetScroll();
        
        // One final reset after brief delay for any loading content
        const timeoutId = setTimeout(resetScroll, 100);
        
        // Cleanup timeout
        return () => clearTimeout(timeoutId);
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
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
            <SectionSeparator/>
        </FadeIn>
        <Footer />
        <Analytics />
    </div>
    );
}

export default App;