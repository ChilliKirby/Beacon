import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: "asssss",
    loggedIn: false,
    token: null,
    friends: [],
    tasks: [],
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) =>{
            state.userName = action.payload.userName;
        },
        
    }
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;