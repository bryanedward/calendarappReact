import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { deleteNote } from '../../actions/note'
import { DivDelete } from './style'
export const BtnDelete = (props) => {
  const status = props.visible ? true : false
  const dispatch = useDispatch()

  const btnDelete = () => {
    dispatch(deleteNote())
  }

  return (
    <DivDelete visible={status} onClick={btnDelete}>
      <AiFillDelete size='2rem' />
    </DivDelete>
  )
}
