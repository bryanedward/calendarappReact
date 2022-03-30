import { types } from '../types/types'

export const setActive = (note) => ({
    type: types.eventSetActive,
    payload: note
})

export const addNew = (note) => ({
    type: types.eventAddNew,
    payload: note
})

export const clearActive = () => ({
    type: types.clearActive
})

export const updateNote = (note) => ({
    type: types.updateActive,
    payload: note
})

export const deleteNote = () => ({
    type: types.deleteActive
})