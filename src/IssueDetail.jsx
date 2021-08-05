import React from 'react';
import store from './store.js';
import graphQLFetch from './graphQLFetch.js';

export default function IssueDetail({ issue }) {
  if (issue) {
    return (
      <div>
        <h3>Description</h3>
        <pre>{issue.description}</pre>
      </div>
    );
  }
  return null;
}
