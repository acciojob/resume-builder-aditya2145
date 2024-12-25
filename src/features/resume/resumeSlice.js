import { createSlice } from "@reduxjs/toolkit";

export const resumeSlice = createSlice({
    name: 'resume',
    initialState: {
        profile: {
            fName: '',
            lName: '',
            address: '',
            phone: '',
            url: '',
        },
        education: [],
        socialLinks: [],
        skills: [],
        projects: [],
    },
    reducers: {
        updateProfile: (state, action) => {
            state.profile = action.payload;
        },
        addEducation: (state, action) => {
            state.education.push(action.payload);
        },
        deleteEducation: (state, action) => {
            state.education.splice(action.payload, 1);
        },
        addSkill: (state, action) => {
            state.skills.push(action.payload);
        },
        deleteSkill: (state, action) => {
            state.skills.splice(action.payload, 1);
        },
        addProject: (state, action) => {
            state.projects.push(action.payload);
        },
        deleteProject: (state, action) => {
            state.projects.splice(action.payload, 1);
        },
        addSocialLink: (state, action) => {
            state.socialLinks.push(action.payload);
        },
        deleteSocialLink: (state, action) => {
            state.socialLinks.splice(action.payload, 1);
        },
    },
});

export const {
    updateProfile,
    addEducation,
    deleteEducation,
    addSkill,
    deleteSkill,
    addProject,
    deleteProject,
    addSocialLink,
    deleteSocialLink,
} = resumeSlice.actions;

export default resumeSlice.reducer;