import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../features/resume/resumeSlice';

const Profile = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.resume.profile);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateProfile({ ...profile, [name]: value }));
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <h3>Add your profile details</h3>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <input type="text" placeholder='First Name' name='fName' value={profile.fName} onChange={handleChange} required />
                <input type="text" placeholder='Last Name' name='lName' value={profile.lName} onChange={handleChange} required />
                <input type="tel" placeholder='Phone Number' name='phone' value={profile.phone} onChange={handleChange} required />
                <input type="text" placeholder='Address' name='address' value={profile.address} onChange={handleChange} required />
                <div>
                    <label htmlFor="_file">Profile Image</label>
                    <input type="file" id='_file' name='url' onChange={(e) => dispatch(updateProfile({ ...profile, url: e.target.files[0] }))} required />
                </div>
            </div>
        </div>
    );
};

export default Profile;