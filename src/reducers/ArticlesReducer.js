import { ADD_ARTICLE } from "../constants/constants";

const initialState = [
    { name: "Game Of Thrones", rating: 100 }
];

const ArticlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return [...state, action.payload];

        default:
            return state;
    }
}

export default ArticlesReducer;