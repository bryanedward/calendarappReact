import React, { useState } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import './style.css'
import { Button, Form, Div, Input } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { uiClose } from '../../actions/ui';
import { addNew } from '../../actions/note';
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
    }

    return (
        <Modal
            isOpen={modalOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            overlayClassName='modal-fondo'>
            <ContainerForm />
        </Modal>
    );
}

const startValue = moment().minutes(0).seconds(0).add(1, 'hours')
const startValueEnd = startValue.clone().add('1', 'hours')

const ContainerForm = () => {
    const [dateStart, setdateStart] = useState(startValue.toDate());
    const [dateEnd, setdateEnd] = useState(startValueEnd.toDate());
    const [value, setValue] = useState({
        title: '',
        description: '',
        start: startValue.toDate(),
        end: startValueEnd.toDate()
    })
    const { title, description } = value
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(addNew(value))
    }

    const onChangeInput = ({ target }) => {
        setValue({
            ...value,
            [target.name]: target.value
        })
    }


    return <Form onSubmit={onSubmit} >
        {/* formulario para crear nota */}
        <Div>
            <label htmlFor="">Fecha de inicio</label>
            <DateTimePicker
                onChange={setdateStart}
                value={dateStart}
            />
        </Div>
        <Div >
            <label htmlFor="">Fecha de finalización</label>
            <DateTimePicker
                onChange={setdateEnd}
                minDate={dateStart}
                value={dateEnd}
            />
        </Div>
        <Div >
            <label htmlFor="">Titulo de la nota</label>
            <Input type="text" name='title' value={title} onChange={onChangeInput} />
        </Div>
        <Div >
            <label htmlFor="">descripción de la nota</label>
            <textarea type="text" rows='13' name='description' value={description} onChange={onChangeInput} />
        </Div>

        <Button>Guardar evento</Button>
    </Form>
}

