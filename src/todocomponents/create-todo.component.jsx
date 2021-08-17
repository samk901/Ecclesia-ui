/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default class CreateTodo extends React.Component {
  render() {
    return (
      <div className="form-wrapper">
        <Form>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group controlId="Number">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Create Todo Item
          </Button>
        </Form>
      </div>
    );
  }
}
