import React from 'react';
import store from './store.js';
import graphQLFetch from './graphQLFetch.js';

export default class Calendar extends React.Component {
  static async fetchData() {
    const data = await graphQLFetch('query {about}');
    return data;
  }

  constructor(props) {
    super(props);
    const apiAbout = store.initialData ? store.initialData.about : null;
    delete store.initialData;
    this.state = { apiAbout };
  }

  async componentDidMount() {
    const { apiAbout } = this.state;
    if (apiAbout == null) {
      const data = await About.fetchData();
      this.setState({ apiAbout: data.about });
    }
  }
  
  render() {
    return (
      <div>
        <h2>Placeholder for Calendar</h2>
      </div>
    );
  }
}