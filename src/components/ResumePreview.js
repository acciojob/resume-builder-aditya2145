// src/components/ResumePreview.js
import React from 'react';
import { useSelector } from 'react-redux';

const ResumePreview = () => {
    const { profile, education, skills, projects, socialLinks } = useSelector((state) => state.resume);

    return (
        <div>
            <h2>Resume Preview</h2>
            <h3>{profile.fName} {profile.lName}</h3>
            <p>{profile.phone}</p>
            <p>{profile.address}</p>
            {profile.url && <img src={URL.createObjectURL(profile.url)} alt="Profile" style={{ width: '100px', height: '100px' }} />}
            <h4>Education</h4>
            {education.map((edu, index) => (
                <div key={index}>
                    <p>{edu.courseName} - {edu.college} ({edu.completionYear}) - {edu.percentage}</p>
                </div>
            ))}
            <h4>Skills</h4>
            {skills.map((skill, index) => (
                <div key={index}>
                    <p>{skill}</p>
                </div>
            ))}
            <h4>Projects</h4>
            {projects.map((project, index) => (
                <div key={index}>
                    <p>{project.projectName} - {project .techStack} - {project.description}</p>
                </div>
            ))}
            <h4>Social Links</h4>
            {socialLinks.map((link, index) => (
                <div key={index}>
                    <p>{link}</p>
                </div>
            ))}
        </div>
    );
};

export default ResumePreview;