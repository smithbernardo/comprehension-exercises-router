import React from 'react';
class Users extends React.Component {
  render() {
    const { greetingMessage = 'Hi there' } = this.props
    return (
  <main>
    <h2> Users </h2>
    <p> {greetingMessage}, this is my awesome Users component </p>
  </main>
);
  }
}

export default Users;
