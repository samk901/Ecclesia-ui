/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default class CreateTodo extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeTodoName = this.onChangeTodoName.bind(this);
    this.onChangeTodoEmail = this.onChangeTodoEmail.bind(this);
    this.onChangeTodoNumber = this.onChangeToDoNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      number: '',
    };
  }

  onChangeTodoName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeTodoEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeTodoNumber(e) {
    this.setState({ number: e.target.value });
  }

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
