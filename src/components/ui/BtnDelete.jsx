import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { deleteEventDatabase } from '../../actions/note'
import { DivDelete } from './style'
export const BtnDelete = (props) => {
  const status = props.visible ? true : false
  const dispatch = useDispatch()
  const {active} = useSelector(state => state.calendarNote)
  const btnDelete = () => {
    dispatch(deleteEventDatabase(active))
  }

  return (
    <DivDelete visible={status} onClick={btnDelete}>
      <AiFillDelete size='2rem' />
    </DivDelete>
  )
}
