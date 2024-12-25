import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEducation, deleteEducation } from '../features/resume/resumeSlice';

const Education = () => {
    const dispatch = useDispatch();
    const education = useSelector((state) => state.resume.education);
    const [courseName, setCourseName] = useState('');
    const [completionYear, setCompletionYear] = useState('');
    const [college, setCollege] = useState('');
    const [percentage, setPercentage] = useState('');

    const handleAddEducation = () => {
        dispatch(addEducation({ courseName, completionYear, college, percentage }));
        setCourseName('');
        setCompletionYear('');
        setCollege('');
        setPercentage('');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <h3>Add your education details</h3>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <input type="text" placeholder='Course Name *' value={courseName} onChange={(e) => setCourseName(e.target.value)} required />
                <input type="text" placeholder='Completion Year *' value={completionYear} onChange={(e) => setCompletionYear(e.target.value)} required />
                <input type="text" placeholder='College/School *' value={college} onChange={(e) => setCollege(e.target.value)} required />
                <input type="text" placeholder='Percentage *' value={percentage} onChange={(e) => setPercentage(e.target.value)} required />
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <button id='delete' onClick={() => dispatch(deleteEducation(education.length - 1))} disabled={education.length === 0}>Delete</button>
                <button className='blue-btn' id='add_education' onClick={handleAddEducation}>Add Education</button>
            </div>
        </div>
    );
};

export default Education;