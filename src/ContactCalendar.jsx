/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Calendar from 'react-calendar';

export default class ContactCalendar extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Calendar for Scheduling Meetings</h1>
        </header>
        <Calendar />
      </div>
    );
  }
}
