import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import '../../../node_modules/fullcalendar/dist/fullcalendar.css'

import './style.css'

// export default (props) => {
function calendar(props){
console.log(props)
console.log(props.events)
  return (
    <FullCalendar
    // {...props}
    theme="bootstrap3"
      default-view="month"
      plugins={[ dayGridPlugin ]}
      events=
      // {[
      //   {...props.events}
      //   ]}
      // {...props}
      {[
        { title: 'event 1', start: '2019-04-01 11:00:00',end: '2019-04-01 13:00', color: "blue" },
        { title: 'event 2', date: '2019-04-02', color: "teal" }
    ]}
    // {props.events.map(event => (
    //   title={event.name}>{event.name}</option>
    // ))}

      />
    )
  }

export default calendar
