/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap';

// eslint-disable-next-line react/prefer-stateless-function
export default class TodoTableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.number}</td>
        <td>
          <Link className="edit-link" to={`/edit-student${this.props.obj._id}`}>
            Edit
          </Link>
          <Button size="sm" variant="danger">Delete</Button>
        </td>
      </tr>
    );
  }
}
