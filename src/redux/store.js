import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import authModalSlice from "./slices/authModalSlice";
import phoneModalSlice from "./slices/phoneModalSlice";
import otpModalSlice from "./slices/otpModalSlice";
import termsModalSlice from "./slices/termsModalSlice";
import preloadModalSlice from "./slices/preloadModalSlice";
import authDataSlice from "./slices/authDataSlice";
import registerDataSlice from "./slices/registerDataSlice";
import userDataSlice from "./slices/userDataSlice";
import exploreDataSlice from "./slices/exploreDataSlice";
import messageSlice from "./slices/messageSlice";

const reducers = combineReducers({
  authModalSlice,
  phoneModalSlice,
  otpModalSlice,
  termsModalSlice,
  preloadModalSlice,
  authDataSlice,
  registerDataSlice,
  userDataSlice,
  exploreDataSlice,
  messageSlice
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [
    "authModalSlice",
    "phoneModalSlice",
    " otpModalSlice",
    "termsModalSlice",
    "preloadModalSlice",
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk, logger],
});
const persistor = persistStore(store);
export { store, persistor };
