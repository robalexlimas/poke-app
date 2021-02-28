import { UI } from '../types/index';

const initialState = {
    modal: false,
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
        default:
            return state;
    }
}