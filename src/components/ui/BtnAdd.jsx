import React from 'react'
import { Div } from './style'
import {AiOutlinePlus} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { ui } from '../../actions/ui'

export const BtnAdd = () => {

  const dispatch = useDispatch()


  const btnOpenModal = () => {
    dispatch(ui())
  }

  return (
    <Div>
        <AiOutlinePlus size='2rem' onClick={btnOpenModal}/>
    </Div>
  )
}
