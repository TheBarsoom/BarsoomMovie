import { configureStore } from "@reduxjs/toolkit";
import authModalSlice from "./features/authModalSlice";
import appSateSlice from "./features/appSateSlice";
import themeModeSlice from "./features/themeModeSlice";
import globalLoadingSlice from "./features/globalLoadingSlice";

const store = configureStore({
  reducer: {
    appState: appSateSlice,
    authModal: authModalSlice,
    themeMode: themeModeSlice,
    globalLoading: globalLoadingSlice,


  }
});

export default store;