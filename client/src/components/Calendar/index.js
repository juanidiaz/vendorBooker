import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import './fullcalendar.css'

import './style.css'

// export default (props) => {
function calendar(props){
console.log(props.events)
  return (
    <FullCalendar
    // {...props}
    theme="bootstrap3"
    default-view="month"
    plugins={[ dayGridPlugin ]}
    events=
    {props.events}
      />
    )
  }

export default calendar
