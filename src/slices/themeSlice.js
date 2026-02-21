import { createSlice } from "@reduxjs/toolkit";


const loadTheme =()=>{
const data = localStorage.getItem("theme");
return data ? data :"light"
}

const ThemeSlice = createSlice({
    name:"theme",
    initialState:{
        mode:loadTheme()
    },
    reducers:{
        changeTheme:(state)=>{
            state.mode = state.mode==="light" ? "dark":"light"
        }
    }
});

export const {changeTheme} = ThemeSlice.actions;
export default ThemeSlice.reducer;