import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICharacteristics } from '../../types/ICharacteristics';

interface CharacteristicsState {
  characteristics: ICharacteristics[];
  isShow: boolean;
  isActive: boolean;
  title: string;
  id: number;
}

const initialState: CharacteristicsState = {
  characteristics:[],
  isShow: false,
  isActive: true,
  title: '',
  id: 0,
};

export const characteristicsSlice = createSlice({
  name: 'characteristics',
  initialState,
  reducers: {
    submitCharacteristics(state, action: PayloadAction<ICharacteristics[]>) {
      state.characteristics = action.payload;
      state.isShow = true;
    },
    submitTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setIsActive(state, action: PayloadAction<boolean>) {
      state.isActive = action.payload;
    },
    setId(state, action: PayloadAction<number>){
      state.id = action.payload;
    },
    setSpeed(state, action: PayloadAction<number>) { 
      state.characteristics = state.characteristics.map((el, index) => {
        if (index + 1 == state.id) {
          el.speed = action.payload;
          return el;
        }
        return el;
      })
    }
  },
});

export default characteristicsSlice.reducer;