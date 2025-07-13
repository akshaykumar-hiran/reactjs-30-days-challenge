// AppClass.jsx
import React, { Component } from 'react';
import CardComponent from './CardComponent';

class AppClass extends Component {
  render() {
    const { title, content, footer } = this.props;

    // Print default or passed props
    console.log('Props:', { title, content, footer });

    return (
      <div>
        <h1>Class Component Example</h1>
        <CardComponent
          title="Advanced React"
          content="Understand lifecycle methods and context."
          footer="Footer: Continue"
        />
      </div>
    );
  }
}

export default AppClass;
