import { baseApi } from "./api/baseApi";
import authSlice from "./auth/authSlice";
export const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
 
  auth:authSlice
  
};

