import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSocialLink, deleteSocialLink } from '../features/resume/resumeSlice';

const SocialMedia = () => {
    const dispatch = useDispatch();
    const socialLinks = useSelector((state) => state.resume.socialLinks);
    const [socialLink, setSocialLink] = useState('');

    const handleAddSocialLink = () => {
        dispatch(addSocialLink(socialLink));
        setSocialLink('');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <h3>Add social links like LinkedIn, GitHub, etc.</h3>
            <input type="text" placeholder='Social Links *' value={socialLink} onChange={(e) => setSocialLink(e.target.value)} required />
            <div style={{ display: 'flex', gap: '1rem' }}>
                <button id='delete_social' onClick={() => dispatch(deleteSocialLink(socialLinks.length - 1))} disabled={socialLinks.length === 0}>Delete Social</button>
                <button className='blue-btn' id='add_social' onClick={handleAddSocialLink}>Add Social</button>
            </div>
        </div>
    );
};

export default SocialMedia;