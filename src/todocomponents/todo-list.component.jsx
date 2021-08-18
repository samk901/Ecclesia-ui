/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable arrow-parens */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap';
import TodoTableRow from './TodoTableRow.jsx';


export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/todo-list/')
      .then(res => {
        this.setState({
          todolist: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    // eslint-disable-next-line arrow-body-style
    return this.state.todolist.map((res, i) => {
      return <TodoTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {this.DataTable()}
          </tbody>
        </Table>
      </div>
    );
  }
}
