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
        // Aggressive scroll reset - immediate positioning
        const resetScroll = () => {
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            window.scrollTo(0, 0);
        };
        
        // Reset immediately
        resetScroll();
        
        // Reset after DOM load
        setTimeout(resetScroll, 50);
        
        // Reset after images/fonts might load
        setTimeout(resetScroll, 200);
        
        // Reset after animations complete
        setTimeout(resetScroll, 800);
        
        // Listen for any layout changes and reset
        const observer = new MutationObserver(resetScroll);
        observer.observe(document.body, { 
            childList: true, 
            subtree: true, 
            attributes: false 
        });
        
        // Cleanup observer
        return () => observer.disconnect();
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
        </FadeIn>
        <Footer />
        <Analytics />
    </div>
    );
}

export default App;