import { types } from '../types/types';
import moment  from 'moment';

const initialState = {
    event: [{
        title: 'mi cumple',
        start: moment().toDate(),
        end:moment().add(2,'hours').toDate(),
        bgcolor: "#fafafa",
        user:{
          uid:'1',
          name:'edwards'
        }
      }],
    active:null
}


export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.eventAddNew:
            return{
                event:action.payload
            }
        case types.eventSetActive:
            return{
                ...state,
                active: action.payload
            }
        default:
            return state;
    }
}
