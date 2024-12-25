import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProject, deleteProject } from '../features/resume/resumeSlice';

const Projects = () => {
    const dispatch = useDispatch();
    const projects = useSelector((state) => state.resume.projects);
    const [projectName, setProjectName] = useState('');
    const [techStack, setTechStack] = useState('');
    const [description, setDescription] = useState('');

    const handleAddProject = () => {
        dispatch(addProject({ projectName, techStack, description }));
        setProjectName('');
        setTechStack('');
        setDescription('');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <h3>Add your Mini Projects</h3>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <input type="text" placeholder='Project Name *' value={projectName} onChange={(e) => setProjectName(e.target.value)} required />
                <input type="text" placeholder='Tech Stack' value={techStack} onChange={(e) => setTechStack(e.target.value)} required />
                <input type="text" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <button id='delete' onClick={() => dispatch(deleteProject(projects.length - 1))} disabled={projects.length === 0}>Delete</button>
                <button className='blue-btn' id='add_project' onClick={handleAddProject}>Add Project</button>
            </div>
        </div>
    );
};

export default Projects;