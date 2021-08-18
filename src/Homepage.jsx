/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Carousel } from 'react-bootstrap';

export default class Homepage extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h3>Welcome to Ecclesia</h3>
        <Carousel>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img width={900} height={800} alt="900x500" src="images/community.png" />
            </div>
            <Carousel.Caption>
              <h3>Manage Your Contact List</h3>
              <p>Keeping track of new members is key for building relationships.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img width={900} height={800} alt="900x500" src="images/contact-list.png" />
            </div>
            <Carousel.Caption>
              <h3>Todo Contact List</h3>
              <p>Store, Add, Update and Delete your list of people to connect with.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img width={900} height={800} alt="900x500" src="images/calendar.png" />
            </div>
            <Carousel.Caption>
              <h3>Ecclesia Calendar</h3>
              <p>Keep track of your appointments, phone calls and meetings.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
