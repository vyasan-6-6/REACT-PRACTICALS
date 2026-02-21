import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
    name:"theme",
    initialState:{
        mode:"light"
    },
    reducers:{
        changeTheme:(state)=>{
            state.mode = state.mode==="light" ? "dark":"light"
        }
    }
});

export const {changeTheme} = ThemeSlice.actions;
export default ThemeSlice.reducer;