import React, { useEffect, useState } from 'react';
import moment from "moment";
import DateTimePicker from 'react-datetime-picker';
import { Button, Form, Div, Input, TextArea } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { addNew, updateNote } from '../../actions/note';
import { uiClose } from '../../actions/ui';
const startValue = moment().minutes(0).seconds(0).add(1, 'hours')
const startValueEnd = startValue.clone().add('1', 'hours')

const initialSate = {
    title: '',
    description: '',
    start: startValue.toDate(),
    end: startValueEnd.toDate()
}

export const ContainerForm = () => {
    const [dateStart, setdateStart] = useState(startValue.toDate());
    const [dateEnd, setdateEnd] = useState(startValueEnd.toDate());
    const [value, setValue] = useState(initialSate)
    const dispatch = useDispatch()
    const {active} = useSelector(state => state.calendarNote)
    const { title, description } = value

    useEffect(() => {
        if(active){
            setValue(active)
        }
    }, [active])

    const onSubmit = (e) => {
        e.preventDefault()
        const note = {
            ...value,
            id: new Date().getMilliseconds(),
            user: {
                uid: '1',
                name: 'edwards'
            }
        }

        if(active){
            dispatch(updateNote(value))
        }else{
            dispatch(addNew(note))
        }

        dispatch(uiClose())
        setValue(initialSate)
    }

    const onChangeInput = ({ target }) => {
        setValue({
            ...value,
            [target.name]: target.value
        })
    }

    const startDate = (e) => {
        setdateStart(e)
        setValue({
            ...value,
            start: e
        })
    }

    const endDate = (e) => {
        setdateEnd(e)
        setValue({
            ...value,
            end: e
        })
    }


    return <Form onSubmit={onSubmit} >
        {/* formulario para crear nota */}
        <Div>
            <label htmlFor="">Fecha de inicio</label>
            <DateTimePicker
                onChange={startDate}
                value={dateStart}
            />
        </Div>
        <Div >
            <label htmlFor="">Fecha de finalización</label>
            <DateTimePicker
                onChange={endDate}
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
            <TextArea type="text" rows='13' name='description' value={description} onChange={onChangeInput} />
        </Div>
        <Button>Guardar evento</Button>
    </Form>
}

