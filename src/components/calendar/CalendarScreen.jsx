import { Navbar } from '../ui/Navbar'
import {messages} from '../helpers/calendar-messages-es'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import 'moment/locale/es'
import { CalendarEvent } from './CalendarEvent';
import { useEffect, useState } from 'react';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { ui } from '../../actions/ui';
import { getAllEvent, setActive } from '../../actions/note';
import { BtnAdd } from '../ui/BtnAdd';
import { BtnDelete } from '../ui/BtnDelete';
const localizer = momentLocalizer(moment)
moment.locale('es')


export const CalendarScreen = () => {
  const [value, setvalue] = useState(localStorage.getItem('lastView') || 'month')
  const dispatch = useDispatch()
  const {event, active} = useSelector(state => state.calendarNote)
  const {uid} = useSelector(state => state.auth)
  useEffect(() => {
    dispatch(getAllEvent())
  }, [dispatch])
  


  const eventStyle = (e) =>{
    const style ={
      backgroundColor: (uid === e.user._id) ? 'red': 'orange',
      opacity:'0.8'
    }
    return {
      style
    }
  }
  const dobleClick = () => {
    dispatch(ui())

  }

  const selectClick = (e) => {
    dispatch(setActive(e))
  }

  const onView = (e) =>{
    setvalue(e)
    localStorage.setItem('lastView', e)
  }

  return (
    <div className='CalendarScreen' >
      <Navbar />
      <Calendar
        localizer={localizer}
        events={event}
        startAccessor="start"
        endAccessor="end"
        className='calendarformat'
        messages={ messages}
        eventPropGetter={eventStyle}
        onDoubleClickEvent={dobleClick}
        onSelectEvent={selectClick}
        onView={onView}
        view={value}
        components={{
          event: CalendarEvent
        }}
        />
        <BtnDelete visible = {active}/>
        <BtnAdd/>
      <CalendarModal/>
    </div>
  )
}
