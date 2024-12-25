import React, { useState } from 'react';
import './../styles/App.css';
import Profile from './Profile';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import SocialMedia from './SocialMedia';
import ResumePreview from './ResumePreview';

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const components = [<Profile />, <Education />, <Skills />, <Projects />, <SocialMedia />, <ResumePreview />];

    const handlePrevious = () => {
        setCurrentIndex(currentIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex(currentIndex + 1);
    };

    const currentComponent = components[currentIndex];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <h1 className='app-heading'>RESUME GENERATOR</h1>
            <div>{currentComponent}</div>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <button id='back' onClick={handlePrevious} disabled={currentIndex === 0}>Back</button>
                <button className='pink-btn' id='next' onClick={handleNext} disabled={currentIndex === components.length - 1}>Next</button>
            </div>
        </div>
    );
}

export default App;
