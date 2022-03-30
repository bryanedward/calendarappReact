import React, { useState } from 'react';
import Modal from 'react-modal';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { uiClose } from '../../actions/ui';
import { ContainerForm } from '../forms/ContainerForm';
import { clearActive } from '../../actions/note';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {
    const { modalOpen } = useSelector(state => state.ui)
    const dispatch = useDispatch()
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        dispatch(uiClose())
        dispatch(clearActive())
    }

    return (
        <Modal
            isOpen={modalOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel='moda-fondo'
            >
           <ContainerForm/>
        </Modal>
    );
}
