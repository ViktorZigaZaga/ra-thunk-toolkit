import { configureStore, } from '@reduxjs/toolkit';
import factsSlice from './slices/factsSlice';
import photoSlice from './slices/photoSlice';

export const store = configureStore({
    reducer: {
        facts: factsSlice,
        photo: photoSlice,
    }
});