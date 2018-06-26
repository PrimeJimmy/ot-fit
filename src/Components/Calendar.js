import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
import Addevent from './Addevent';
import '../Containers/calendar.css'
import "react-big-calendar/lib/css/react-big-calendar.css";


Calendar.setLocalizer(Calendar.momentLocalizer(moment));

class MyCalendar extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
      }
    ]
  };

  render() {
    return (
      <div className="">
      <article>
        <Calendar 
          className=''
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "75vh", margin: '15px'}}
        />
        <Addevent />
      </article>  
      </div>
    );
  }
}

export default MyCalendar;


