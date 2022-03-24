import React, { useState } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

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

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={true}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            overlayClassName='modal-fondo'>
            <ContainerForm />
        </Modal>
    );
}



const ContainerForm = () => {

    const startValue = moment().minutes(0).seconds(0).add(1,'hours')
    const startValueEnd = startValue.clone().add('1','hours')

    const [dateStart, setdateStart] = useState(startValue.toDate());
    const [dateEnd, setdateEnd] = useState(startValueEnd.toDate());
    

    return <form>
        <div className='form__input'>
            <label htmlFor="">Fecha de inicio</label>
            <DateTimePicker
                onChange={setdateStart }
                value={dateStart}
            />
        </div>
        <div className='form__input'>
            <label htmlFor="">Fecha de finalización</label>
            <DateTimePicker
                onChange={setdateEnd }
                minDate={dateStart}
                value={dateEnd}
            />
        </div>
        <div className='form__input'>
            <label htmlFor="">Titulo de la nota</label>
            <input type="text" />
        </div>
        <div className='form__input'>
            <label htmlFor="">descripción de la nota</label>
            <textarea type="text" rows='13' />
        </div>

        <button className='btnSave'>Guardar evento</button>
    </form>
}

