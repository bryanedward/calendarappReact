import { types } from "../types/types";


const initialState  = {
    checking: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authChecking:
            
            return state;
    
        default:
            return state;
    }
}
