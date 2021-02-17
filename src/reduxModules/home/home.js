
import { SUCCESS, PENDING, ERROR } from '../../constants/actionStatus';

import { SET_IMAGES, SET_SEARCH_IMAGES } from './index';

const initialState = {
    fetchImagesPending: false,
    collection: [],
    isSearch: false
};

const user = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_IMAGES + PENDING:
            state = {
                ...state,
                fetchImagesPending: true,
                isSearch: false
            }
            return state;
        case SET_IMAGES + SUCCESS:
            state = {
                ...state,
                fetchImagesPending: false,
                collection: action.payload,
                isSearch: false
            }
            return state;
        case SET_SEARCH_IMAGES + PENDING:
            state = {
                ...state,
                fetchImagesPending: true,
                collection: [],
                isSearch: true
            }
            return state;
        case SET_SEARCH_IMAGES + SUCCESS:
            state = {
                ...state,
                fetchImagesPending: false,
                collection: action.payload,
                isSearch: true
            }
            return state;
        default:
            return state;
    }
}

export default user;

