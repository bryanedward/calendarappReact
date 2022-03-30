import React from 'react'
import { types } from '../types/types';

const initialState = {
    modalOpen: false
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiOpenModals:
            return {
                modalOpen: true
            }
        case types.uiCloseModals:
            return{
                modalOpen: false
            }
        default:
            return state;
    }
}
