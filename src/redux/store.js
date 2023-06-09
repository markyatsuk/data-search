import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authSlice";
// import browseSlice from "./browse/browse-slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { contactsApi } from "./auth/reducer";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

// const persistAccountsConfig = {
//   key: "accounts",
//   storage,
//   whitelist: ["token"],
// };

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    // contacts: persistReducer(persistAccountsConfig, browseSlice),
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
