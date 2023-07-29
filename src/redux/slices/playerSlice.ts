import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Player } from '../../shared/types';

type PlayersState = {
  value: Player[];
};

const initialState: PlayersState = {
  value: [],
};

export const playerSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setPlayers: (state, action: PayloadAction<Player[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setPlayers } = playerSlice.actions;

export default playerSlice.reducer;
