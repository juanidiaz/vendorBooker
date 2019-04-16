import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import '../../node_modules/fullcalendar/dist/fullcalendar.css' // webpack must be configured to do this

// const events=
// [
//   { title: 'event 1', date: '2019-04-01', color: "blue" },
//   { title: 'event 2', date: '2019-04-02', color: "teal" }
// ]


function calendar(props){
    return (
      <FullCalendar
      theme="bootstrap3"
      default-view="month"
      // events={[ title="event1", start= "2019-04-05 04:20:00", color: "red"]}
      plugins={[ dayGridPlugin ]}
      events={props.events}

      />
    )
  }

export default calendar
