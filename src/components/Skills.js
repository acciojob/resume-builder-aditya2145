import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSkill, deleteSkill } from '../features/resume/resumeSlice';

const Skills = () => {
    const dispatch = useDispatch();
    const skills = useSelector((state) => state.resume.skills);
    const [skill, setSkill] = useState('');

    const handleAddSkill = () => {
        dispatch(addSkill(skill));
        setSkill('');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <h3>Add your skills</h3>
            <input type="text" placeholder='Skill *' value={skill} onChange={(e) => setSkill(e.target.value)} required />
            <div style={{ display: 'flex', gap: '1rem' }}>
                <button id='delete_skill' onClick={() => dispatch(deleteSkill(skills.length - 1))} disabled={skills.length === 0}>Delete Skill</button>
                <button className='blue-btn' id='add_skill' onClick={handleAddSkill}>Add Skill</button>
            </div>
        </div>
    );
};

export default Skills;