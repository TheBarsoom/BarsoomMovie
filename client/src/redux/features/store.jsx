import { configureStore } from "@reduxjs/toolkit";
import appSateSlice from "./features/appSateSlice";
import appSateSlice from "./features/appSateSlice";

const store = configureStore({
  reducer: {
    appState: appSateSlice,
    authModal: authModalSlice,

  }
});

export default store;