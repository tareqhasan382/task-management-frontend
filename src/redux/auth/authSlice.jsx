import { createSlice } from "@reduxjs/toolkit";
const auth = JSON.parse(localStorage.getItem("auth"));
  //  console.log("auth:",auth)
const initialState = {
    accessToken: auth ? auth?.accessToken : null,
    user: auth ? auth?.user : undefined,
    error: null,
};
// const auth = JSON.parse(localStorage.getItem("auth"));
//       const token = auth ? auth.accessToken : null;
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
           // console.log("state:",action.payload.accessToken)
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        userLoggedOut: (state) => {
            state.accessToken = localStorage.removeItem("auth") || undefined;
            state.user =localStorage.removeItem("auth") || undefined;
        },
    },
});

export const { userLoggedIn, userLoggedOut, setError } = authSlice.actions;
export default authSlice.reducer;