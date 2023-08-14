import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICharacteristics } from '../../types/ICharacteristics';

interface CharacteristicsState {
  characteristics: ICharacteristics[];
  isShow: boolean;
  title: string;
}

const initialState: CharacteristicsState = {
  characteristics:[],
  isShow: false,
  title: '',
};

export const characteristicsSlice = createSlice({
  name: 'characteristics',
  initialState,
  reducers: {
    submitCharacteristics(state, action: PayloadAction<ICharacteristics[]>) {
      state.characteristics = action.payload;
      state.isShow = true;
      console.log(state);
    },
    submitTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
  },
});


export default characteristicsSlice.reducer;