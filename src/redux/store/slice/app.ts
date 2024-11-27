import { App } from '@/model/application/payload';
import { State } from '@/model/application/state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: State.App = {
  request: undefined,
  response: undefined,
  current: 0,
  showSteps: false,
  isUpperCase: false,
  isLowerCase: false,
  hasNumber: false,
  isSpecialChar: false,
  menuCollapsed: false,
  selectedKey: "",
  pageTitle: "",
  breadcrumb: "",
  openMenuDrawer: false,
  postUrl: "",
  getUrl: "",
  updateUrl: "",
  deleteUrl: "",
  currentSelectedTabKey: "1",
  limit: 10,
  page: 1,
  action: "CREATE",
  items: []
};

const itinerarySlice = createSlice({
  name: 'itinerary',
  initialState,
  reducers: {
    setAppKey: (state, action: PayloadAction<App>) => {
      const key: keyof State.App = action.payload.key;
      state = {
        ...state,
        [key]: action.payload.value,
      };
      return state;
    },
    setAllAppKeys: (state, action: PayloadAction<State.App>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setAppKey, setAllAppKeys } = itinerarySlice.actions;
export const itineraryReducer = itinerarySlice.reducer;
