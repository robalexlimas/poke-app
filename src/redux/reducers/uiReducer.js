import { UI } from '../types/index';

const initialState = {
    modal: false,
    loading: false,
};

export const uiReducer = (state=initialState, action) => {
    switch (action.type) {
        case UI.SHOW_MODAL:
            return {
                ...state,
                modal: true
            }
        case UI.HIDE_MODAL:
            return {
                ...state,
                modal: false
            }
        case UI.SHOW_LOADING:
            return {
                ...state,
                loading: true
            }
        case UI.HIDE_LOADING:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}