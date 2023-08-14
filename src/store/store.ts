import { combineReducers, configureStore} from '@reduxjs/toolkit';
import {getTrainsApi} from '../services/getTrains';

const rootReducer = combineReducers({
  [getTrainsApi.reducerPath]: getTrainsApi.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(getTrainsApi.middleware)
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];