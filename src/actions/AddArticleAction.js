import { ADD_ARTICLE } from "../constants/constants";

export const AddArticleAction = article => ({
    type: ADD_ARTICLE,
    payload: article
});