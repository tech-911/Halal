import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import authModalSlice from "./slices/authModalSlice";
import phoneModalSlice from "./slices/phoneModalSlice";
import otpModalSlice from "./slices/otpModalSlice";

const reducers = combineReducers({
  authModalSlice,
  phoneModalSlice,
  otpModalSlice,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["authModalSlice", "phoneModalSlice", " otpModalSlice"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk, logger],
});
const persistor = persistStore(store);
export { store, persistor };
