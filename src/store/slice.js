import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'home',
    initialState: {
        url: {},
        genres: {}
    },
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        }
    },
})


export const { getApiConfiguration, getGenres } = slice.actions

export default slice.reducer