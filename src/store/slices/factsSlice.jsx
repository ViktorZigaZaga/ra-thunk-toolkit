import { createSlice } from "@reduxjs/toolkit";

const factsStarWars = [
    'прообразом Чубакки стал пёс режиссёра',
    'актёрам разрешили подобрать любимый цвет для своих световых мечей',
    'в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину',
    'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу',
    'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок',
];

const initialState = {
    factsStarWars: factsStarWars,
    count: '',
    showCountFacts: [],
};

const factsSlice = createSlice({
    name: 'facts',
    initialState,
    reducers: {
        showFacts(state, action) {
            state.showCountFacts = [];
            if(!action.payload) return;
            state.showCountFacts = factsStarWars.slice(0,Number(action.payload));
        },
        showCount(state, action) {
            if(action.payload > 5 || action.payload < 0) return;
            state.count = action.payload;
        }
    }
});

export const {showFacts, showCount} = factsSlice.actions;
export default factsSlice.reducer;