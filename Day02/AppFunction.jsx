// AppFunctional.jsx
import React from 'react';
import CardComponent from './CardComponent';

const AppFunctional = () => {
  
  return (
    <div>
      <h1>Functional Component Example</h1>
      <CardComponent
        title="React Basics"
        content="Learn about props, state, and components."
        footer="Footer: Learn More"
      />
      <CardComponent/>
      
    </div>
  );
};

export default AppFunctional;
