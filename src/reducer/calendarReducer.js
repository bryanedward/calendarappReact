import { types } from '../types/types';

const initialState = {
    event: [],
    active:null
}
export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.eventAddNew:
            return{
                ...state,
                event:[...state.event,action.payload]
            }
        case types.eventSetActive:
            return{
                ...state,
                active:action.payload
            }
        case types.clearActive:
            return{
                ...state,
                active: null
            }
        case types.updateActive:
            return{
                ...state,
                event: state.event.map(e => (e.id === action.payload.id) ? action.payload : e)
            }
        case types.deleteActive:
            return{
                ...state,
                event: state.event.filter(e => (e.id !== state.active.id)),
                active: null
            }
        case types.eventLoaded:
            return{
                ...state,
                event: [...action.payload]
            }
        case types.eventLogOut:
            return{
                ...initialState
            }
        default:
            return state;
    }
}
