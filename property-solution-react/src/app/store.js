import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../Features/posts/postsSlice"



const store = configureStore({
    reducer: {
        posts: postsReducer,
    }
})

export default store;