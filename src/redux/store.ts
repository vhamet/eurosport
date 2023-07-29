import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './slices/playerSlice';
import matchReducer from './slices/matchSlice';

export const store = configureStore({
  reducer: { players: playerReducer, matches: matchReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
