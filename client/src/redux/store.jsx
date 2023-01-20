import { configureStore } from "@reduxjs/toolkit";
import authModalSlice from "./features/authModalSlice";
import appSateSlice from "./features/appSateSlice";
import themeModeSlice from "./features/themeModeSlice";

const store = configureStore({
  reducer: {
    appState: appSateSlice,
    authModal: authModalSlice,
    themeMode: themeModeSlice,

  }
});

export default store;