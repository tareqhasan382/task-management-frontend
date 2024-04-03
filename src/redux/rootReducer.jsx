import { baseApi } from "./api/baseApi";
import authSlice from "./auth/authSlice";
import jobModelSlice from "./jobs/jobModelSlice";
export const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  jobModel:jobModelSlice,
  auth:authSlice
  
};

