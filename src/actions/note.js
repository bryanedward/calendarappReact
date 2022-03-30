import { types } from '../types/types'

export const setActive = (note) => ({
    type: types.eventSetActive,
    payload: note
})


export const addNew = (note) => ({
    type: types.eventAddNew,
    payload:note
})