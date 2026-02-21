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
            const nextmode = state.mode==="light" ? "dark" :state.mode=== "dark"? "blue":"light";
                  state.mode =nextmode;
            }
    }
});

export const {changeTheme} = ThemeSlice.actions;
export default ThemeSlice.reducer;