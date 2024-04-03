import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from "./rootReducer"; 
import baseApi from "./api/baseApi";

export const store = configureStore({
  reducer: {
    ...rootReducer, 
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
});
