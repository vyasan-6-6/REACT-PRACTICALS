import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../slices/themeSlice";
 


 const saveTheme = (state)=>{
    localStorage.setItem("theme",state)
 }

const store = configureStore({
    reducer: {
        theme: themeSlice,
    },
}); 

store.subscribe(()=>saveTheme(store.getState().theme.mode))
 
export default store;
