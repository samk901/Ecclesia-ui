/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class TodoTable extends React.Component {
  render() {
    return (
      <div>This is a placeholder for a table of issues.</div>
    );
  }
}

class TodoAdd extends React.Component {
  render() {
    return (
      <div>This is a placeholder for a form to add an issue.</div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Todo List</h1>
        <TodoTable />
        <hr />
        <TodoAdd />
      </React.Fragment>
    );
  }
}
