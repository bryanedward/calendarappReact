import { Navbar } from '../ui/Navbar'
import {messages} from '../helpers/calendar-messages-es'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import 'moment/locale/es'
import { CalendarEvent } from './CalendarEvent';
import { useState } from 'react';
import { CalendarModal } from './CalendarModal';
const localizer = momentLocalizer(moment)
moment.locale('es')

const myEventsList = [{
  title: 'mi cumple',
  start: moment().toDate(),
  end:moment().add(2,'hours').toDate(),
  bgcolor: "#fafafa",
  user:{
    uid:'1',
    name:'edwards'
  }
}]


export const CalendarScreen = () => {
 

  const [value, setvalue] = useState(localStorage.getItem('lastView') || 'month')


  const event = (e) =>{
    const style ={
      backgroundColor: 'red',
      opacity:'0.8'
    }
    return {
      style
    }
  }

  

  const dobleClick = () => {

  }

  const selectClick = () => {

  }

  const onView = (e) =>{
    setvalue(e)
    localStorage.setItem('lastView', e)
  }

  return (
    <div>
      <Navbar />

      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100vh' }}
        messages={ messages}
        eventPropGetter={event}
        onDoubleClickEvent={dobleClick}
        onSelectEvent={selectClick}
        onView={onView}
        view={value}
        components={{
          event: CalendarEvent
        }}
        />
      <CalendarModal/>
    </div>
  )
}
