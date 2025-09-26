import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    entries: [],
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        create: (state, actions) => {
            state.posts.push(actions.payload);
        },
        remove: (state, actions) => {
            state.posts = state.posts.filter((post) => post.name !== actions.payload.name);
        },
        update: (state, actions) => {
            const index = state.posts.findIndex((post) => post.name === actions.payload.name);

        }
    }
})

export const { create, remove, update} = postSlice.actions;
export default postSlice.reducer;