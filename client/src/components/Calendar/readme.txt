import Calendar from "./components/Calendar"

Calendar component is expecting the following:
[
    { title: 'event 1', start: '2019-04-01 11:00:00',end: '2019-04-01 13:00', color: "blue" },
    { title: 'event 2', date: '2019-04-02', color: "teal" }
]

To be called and passed like this:
      <Calendar
      events={events}/>