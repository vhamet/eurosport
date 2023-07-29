import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Match } from '../../shared/types';

export type MatchsState = {
  value: Match[];
};

const initialState: MatchsState = {
  value: [],
};

export const matchSlice = createSlice({
  name: 'match',
  initialState,
  reducers: {
    setMatches: (state, action: PayloadAction<Match[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setMatches } = matchSlice.actions;

export default matchSlice.reducer;
