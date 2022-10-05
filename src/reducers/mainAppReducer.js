import { createReducer } from "@reduxjs/toolkit"

const initialState = {
    responsiveModal: [],
}

const mainAppReducer = createReducer(initialState, {
    DISPLAY_RESPONSIVE_MODAL: (state, action) => {
        if (state.responsiveModal.includes(action.id)) {
            state.responsiveModal = [
                ...state.responsiveModal.filter((x) => x !== action.id),
            ]
        } else {
            state.responsiveModal = [...state.responsiveModal, action.id]
        }
    },
})

export default mainAppReducer
