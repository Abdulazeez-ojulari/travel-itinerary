import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
// import { appReducer, setAppKey, setAllAppKeys } from "./slice/app";
import {
  bookingApi,
  useGetDataQuery,
  usePostDataMutation,
  useLazyGetDataQuery
} from "./api/api.config";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { itineraryReducer, setAppKey, setAllAppKeys } from "./slice/app";

const rootReducer = combineReducers({
  app: itineraryReducer,
  [bookingApi.reducerPath]: bookingApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NEXT_ENV !== "production",
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(bookingApi.middleware);
  },
});

// enable listener behavior for the store
setupListeners(store.dispatch);

export {
  setAppKey,
  setAllAppKeys,
  useGetDataQuery,
  usePostDataMutation,
  useLazyGetDataQuery
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
