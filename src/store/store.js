const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        theme:themeSlice,
    }
});

export default store;